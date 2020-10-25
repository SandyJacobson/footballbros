import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getOnePlayer } from "../../services/players";
import { updatePlayer } from "../../services/teams";
import "./PlayerDetail.css";

const PlayerDetail = (props) => {
  const [player, setPlayer] = useState(null);
  const [teamId, setTeamId] = useState("");
  const { teams, players, setPlayers } = props;
  // We can grab the id of the one player from the url params
  const { id } = useParams();
  const history = useHistory();

  // In the useEffect, we make an api call to get the one player and set it in local state
  useEffect(() => {
    const fetchPlayer = async () => {
      const playerItem = await getOnePlayer(id);
      setPlayer(playerItem);
    };
    fetchPlayer();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPlayer = await updatePlayer(player.id, player);
    console.log(updatedPlayer);
    const playersMap = players.map((player) =>
      player.id === updatedPlayer.id ? (player = updatedPlayer) : player
    );
    setPlayers(playersMap);
    history.push("/players");
  };

  // this is the handleChange for the select drop down
  // since this form only has one value, we do not need a variable name for the key
  const handleChange = (e) => {
    const { value } = e.target;
    // setTeamId(value);
    setPlayer({ ...player, fantasy_team: value });
  };

  return (
    <div>
      {player && (
        <>
          <div className="single-player-div">
            <h3>{player.name}</h3>
            <div className="player-detail-pictures">
              <img src={player.img_url} alt={player.name} />
            </div>
            <div className="player-details">
              <p>
                {player.name} #{player.number}
              </p>
              <p>NFL Team: {player.real_team}</p>
              <p>Fantasy Team: {player.fantasy_team}</p>
            </div>
            {player.teams.map((team) => (
              <p key={team.id}>{team.name}</p>
            ))}
            {/* below is our for for the team drop down */}
            <form onSubmit={handleSubmit}>
              <select defaultValue="default" onChange={handleChange}>
                {/* we can set a default value to tell people to select a team*/}
                {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
                {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
                <option disabled value="default">
                  -- Select a team --
                </option>
                {/* now we loop over all teams and return an <option tag for each */}
                {teams.map((team) => (
                  // we track the team's id as the "value" which will get added to state onChange
                  // the team's name goes between the open and close tag which is what the user sees
                  <option value={team.name} key={team.id}>
                    {team.name}
                  </option>
                ))}
              </select>
              <button>add</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerDetail;
