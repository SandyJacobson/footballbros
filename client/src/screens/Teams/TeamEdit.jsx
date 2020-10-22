import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TeamEdit = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    img_url: '',
    manager: ''
  })
  const { handleTeamEdit, teams } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const { name, img_url, manager } = teams.find(team => team.id === Number(id));
      setFormData({ name, img_url, manager });
    }
    if (teams.length) {
      prefillFormData()
    }
  }, [teams, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleTeamEdit(id, formData);
    }}>
      <h3>Edit Team</h3>
      <label>
        Name:
        <input
          type="text"
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          name='img_url'
          value={formData.img_url}
          onChange={handleChange}
        />
      </label>
      <label>
        Manager:
        <input
          type="text"
          name='manager'
          value={formData.manager}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}

export default TeamEdit;