import React from "react";
import { Link, useHistory } from "react-router-dom";
import './Players.css'

const Players = (props) => {
  const { players, deletePlayer } = props;
  const history = useHistory();

  return (
    <div className='player-container'>
      <h3>Players</h3>
      <br/>
      {players.map((player) => (
        <div className='single-player' key={player.id}>
          <div className="player-pictures">
            <img src={player.img_url} alt={player.name} />
          </div>
          <div className='player-info'>
          <Link to={`/players/${player.id}`}>
            <p>{player.name} #{player.number}</p>
          </Link>
            <p>NFL Team: {player.real_team}</p>
            <p>Fantasy Team: {player.fantasy_team}</p>
            </div>
          <Link to={`/players/${player.id}/edit`}>
            <button className='button'>Edit</button>
          </Link>
          <button className='button' onClick={() => {
            deletePlayer(player.id);
            history.push('/')
          }}>Delete</button>
        </div>
      ))}
      <Link to="/players/new">
        <button className='create-button'>Create</button>
      </Link>
    </div>
  );
};

export default Players;
