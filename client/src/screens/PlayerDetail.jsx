import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addTeam, getOnePlayer } from '../services/players';

const PlayerDetail = (props) => {
  const [player, setPlayer] = useState(null);
  const [teamId, setTeamId] = useState('')
  const { teams } = props;
  // We can grab the id of the one player from the url params
  const { id } = useParams();

  // In the useEffect, we make an api call to get the one player and set it in local state
  useEffect(() => {
    const fetchPlayer = async () => {
      const playerItem = await getOnePlayer(id);
      setPlayer(playerItem);
    }
    fetchPlayer();
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const playerItem = await addTeam(id, teamId);
    setPlayer(playerItem);
  }
  
  // this is the handleChange for the select drop down
  // since this form only has one value, we do not need a variable name for the key
  const handleChange = (e) => {
    const { value } = e.target;
    setTeamId(value);
  }

  return (
    <div>
      {
        player &&
        <>
          <h3>{player.name}</h3>
          {player.teams.map(team => (
            <p key={team.id}>{team.name}</p>
          ))}
          {/* below is our for for the team drop down */}
          <form onSubmit={handleSubmit}>
            <select defaultValue='default' onChange={handleChange}>
              {/* we can set a default value to tell people to select a team*/}
              {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
              {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
              <option disabled value='default'>-- Select a team --</option>
              {/* now we loop over all teams and return an <option tag for each */}
              {teams.map(team => (
                // we track the team's id as the "value" which will get added to state onChange
                // the team's name goes between the open and close tag which is what the user sees
                <option value={team.id} key={team.id}>{team.name}</option>
              ))}
            </select>
            <button>add</button>
          </form>
        </>
      }
    </div>
  )
}

export default PlayerDetail