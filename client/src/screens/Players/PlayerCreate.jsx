import React, { useState } from "react";
import "./PlayerCreate";

const PlayerCreate = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    img_url: "",
    real_team: "",
    fantasy_team: "",
  });
  const { handlePlayerCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="player-create">
      <form
        className="player-create-form"
        onSubmit={(e) => {
          e.preventDefault();
          handlePlayerCreate(formData);
        }}
      >
        <h3>Create Player</h3>
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
        <button className="submit-player-create">Submit</button>
      </form>
    </div>
  );
};

export default PlayerCreate;
