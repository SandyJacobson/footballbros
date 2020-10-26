import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./TeamEdit.css";

const TeamEdit = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    img_url: "",
    manager: "",
  });
  const { handleTeamEdit, teams } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const { name, img_url, manager } = teams.find(
        (team) => team.id === Number(id)
      );
      setFormData({ name, img_url, manager });
    };
    if (teams.length) {
      prefillFormData();
    }
  }, [teams, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="team-edit">
      <form
        className="team-edit-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleTeamEdit(id, formData);
        }}
      >
        <h3>Edit Team</h3>
        <label>
          Name:
          <input
            className="team-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            className="image"
            type="text"
            name="img_url"
            value={formData.img_url}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Manager:
          <input
            className="manager"
            type="text"
            name="manager"
            value={formData.manager}
            onChange={handleChange}
          />
        </label>
        <br />
        <button className="submit-team-edit">Submit</button>
      </form>
    </div>
  );
};

export default TeamEdit;
