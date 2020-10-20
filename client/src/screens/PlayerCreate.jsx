import React, { useState } from 'react'

const PlayerCreate = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    img_url: '',
    real_team: '',
    fantasy_team: ''
  })
  const { handlePlayerCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handlePlayerCreate(formData);
    }}>
      <h3>Create Player</h3>
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
        Number:
        <input
          type='number'
          name='number'
          value={formData.number}
          onChange={handleChange}
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          name='image'
          value={formData.img_url}
          onChange={handleChange}
        />
      </label>
      <label>
        Real Team:
        <input
          type="text"
          name='real-team'
          value={formData.real_team}
          onChange={handleChange}
        />
      </label>
      <label>
        Fantasy Team:
        <input
          type="text"
          name='fantasy-team'
          value={formData.fantasy_team}
          onChange={handleChange}
        />
      </label>
      <button>Create</button>
    </form>
  )
}

export default PlayerCreate