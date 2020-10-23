import React, { useState } from 'react';
import './TeamCreate.css'

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
    <div className='team-create'>
    <form className='team-create-form' onSubmit={(e) => {
      e.preventDefault();
      handleTeamCreate(formData);
    }}>
      <h3>Create Team</h3>
      <label>
          Name:
        <input
          className='team-name'
          type="text"
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        </label>
        <br/>
      <label>
          Image:
        <input
          className='image'
          type="text"
          name='img_url'
          value={formData.img_url}
          onChange={handleChange}
        />
        </label>
        <br/>
      <label>
          Manager:
        <input
          className='manager'
          type="text"
          name='manager'
          value={formData.manager}
          onChange={handleChange}
        />
      </label>
      <br/>
      <button className='submit-team-create'>Submit</button>
      </form>
      </div>
  )
}

export default TeamCreate;