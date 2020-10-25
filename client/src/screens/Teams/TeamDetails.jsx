import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { addPlayer, getOneTeam } from "../../services/teams";
import "./TeamDetails.css";

const TeamDetails = (props) => {
  const [team, setTeam] = useState(null);
  // const [playerId, setPlayerId] = useState('')
  // const { players } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchTeam = async () => {
      const teamItem = await getOneTeam(id);
      setTeam(teamItem);
    };
    fetchTeam();
  }, [id]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const teamItem = await addPlayer(id, playerId);
  //   setTeam(teamItem);
  // }

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setPlayerId(value);
  // }

  return (
    <div>
      {team && (
        <>
          <div className="single-team-div">
            <div className="team-details">
              <div className="team-detail-pictures">
                <img src={team.img_url} alt={team.manager} />
              </div>
              <h3>{team.name}</h3>
              <p>{team.manager}</p>
            </div>
            <h3>Players:</h3>
            {team.players.map((player) => (
              <p key={player.id}>
                {player.name} #{player.number}
              </p>
            ))}
            {/* <form onSubmit={handleSubmit}>
            <select defaultValue='default' onChange={handleChange}>
              <option disabled value='default'>-- Select a Player --</option>
              {players.map(player => (
                <option value={player.id} key={player.id}>{player.name}</option>
              ))}
            </select>
            <button>add</button>
          </form> */}
          </div>
        </>
      )}
    </div>
  );
};

export default TeamDetails;
