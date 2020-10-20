import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <h1>Football Bros</h1>
      {/* <img src='https://www.profootballnetwork.com/wp-content/uploads/2020/05/fantasy-football.jpg' alt='Fantasy Football Logo'/> */}
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
          :
          <Link to='/login'>Login/Register</Link>
      }
      <hr />
      {
        currentUser &&
        <>
          <Link to='/players'>Players</Link>
          <Link to='/teams'>Teams</Link>
        </>
      }
    </div>
  )
}

export default Header