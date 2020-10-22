import React, { useState } from 'react';

const TeamCreate = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    img_url: '',
    manager: ''
  })
  const { handleTeamCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleTeamCreate(formData);
    }}>
      <h3>Create Team</h3>
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

export default TeamCreate;