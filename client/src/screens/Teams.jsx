import React from 'react'
import { Link, useHistory } from "react-router-dom";

const Teams = (props) => {
  const { teams, deleteTeam } = props;
  const history = useHistory();
  return (
    <div>
      <h3>Teams</h3>
      {
        teams.map(team => (
          <div className='Team-data' key={team.id}>
            <div className='manager-img'>
              <img src={team.img_url} alt={team.manager}/>
            </div>
           <Link to={`/teams/${team.id}`}><p>{team.name}</p></Link>
            <p>{team.manager}</p>
            <button className='delete-button' onClick={() => {
            deleteTeam(team.id);
            history.push('/')
          }}>Delete</button>
            </div>
        ))
      }
       <Link to="/teams/new">
        <button className='create-button'>Create</button>
      </Link>
    </div>
  )
}

export default Teams