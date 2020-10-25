import React from "react";
import { Link, useHistory } from "react-router-dom";
import './Teams.css'

const Teams = (props) => {
  const { teams, deleteTeam } = props;
  const history = useHistory();
  return (
    <div className='teams-container'>
      <h3>Teams</h3>
      {teams.map((team) => (
        <div className="single-team" key={team.id}>
          <div className="manager-img">
            <img src={team.img_url} alt={team.manager} />
          </div>
          <div className='team-data'>
          <Link to={`/teams/${team.id}`}>
            <p>{team.name}</p>
          </Link>
          <p>{team.manager}</p>
          </div>
          <Link to={`/teams/${team.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button
            className="delete-button"
            onClick={() => {
              deleteTeam(team.id);
              history.push("/");
            }}
          >
            Delete
          </button>
        </div>
      ))}
      <Link to="/teams/new">
        <button className="create-button">Create</button>
      </Link>
    </div>
  );
};

export default Teams;
