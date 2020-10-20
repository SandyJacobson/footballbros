import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PlayerEdit = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    img_url: '',
    real_team: '',
    fantasy_team: ''
  })
  const { handlePlayerEdit, players } = props;
  const { id } = useParams();

  // Edit is almost identical to create but we prefill the formData
  useEffect(() => {
    const prefillFormData = () => {
      // We already have the player info that we need in our list of players
      // we can use ".find" to select the single player from the list by its id
      const { name } = players.find(player => player.id === Number(id));
      setFormData({ name });
    }
    // in react, child component will finish loading before the parents
    // as a result, this component will render before the have our players list
    // we conditionally run "prefillFormData" based on if there are players in our list
    if (players.length) {
      prefillFormData()
    }
    // additionally we put "players" in our array to watch for changes
    // when "players" updates, we will rerun our "useEffect" function
  }, [players, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handlePlayerEdit(id, formData);
    }}>
      <h3>Edit Player</h3>
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

export default PlayerEdit