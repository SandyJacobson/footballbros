import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <h1>Football Bros</h1>
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