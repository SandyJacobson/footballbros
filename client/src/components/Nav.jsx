import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = (props) => {
  const { currentUser, handleLogout } = props;

  return (
    <div className="nav">
      <div className="title">
        <Link to="/">
          <h1>Football Bros</h1>
        </Link>
      </div>
      <div className="players-teams">
        {currentUser && (
          <>
            <Link to="/players">Players</Link>
            <br />
            <Link to="/teams">Teams</Link>
          </>
        )}
      </div>
      <div className="logout">
        {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login/Register</Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
