import React from "react";
import Nav from "../components/Nav";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="App">
      <Nav currentUser={currentUser} handleLogout={handleLogout} />
      {props.children}
    </div>
  );
}
