import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PlayerEdit.css";

const PlayerEdit = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    img_url: "",
    real_team: "",
    fantasy_team: "",
  });
  const { handlePlayerEdit, players } = props;
  const { id } = useParams();

  // Edit is almost identical to create but we prefill the formData
  useEffect(() => {
    const prefillFormData = () => {
      // We already have the player info that we need in our list of players
      // we can use ".find" to select the single player from the list by its id
      const { name, number, img_url, real_team, fantasy_team } = players.find(
        (player) => player.id === Number(id)
      );
      setFormData({ name, number, img_url, real_team, fantasy_team });
    };
    // in react, child component will finish loading before the parents
    // as a result, this component will render before the have our players list
    // we conditionally run "prefillFormData" based on if there are players in our list
    if (players.length) {
      prefillFormData();
    }
    // additionally we put "players" in our array to watch for changes
    // when "players" updates, we will rerun our "useEffect" function
  }, [players, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  return (
    <div className="player-edit">
      <form
        className="player-edit-form"
        onSubmit={(e) => {
          e.preventDefault();
          handlePlayerEdit(id, formData);
        }}
      >
        <h3>Edit Player</h3>
        <label>
          Name:
          <input
            className="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Number:
          <input
            className="number"
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            className="image"
            type="text"
            name="image"
            value={formData.img_url}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Real Team:
          <input
            className="real-team"
            type="text"
            name="real_team"
            value={formData.real_team}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Fantasy Team:
          <input
            className="fantasy-team"
            type="text"
            name="fantasy_team"
            value={formData.fantasy_team}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="submit-player-edit">Submit</button>
      </form>
    </div>
  );
};

export default PlayerEdit;
