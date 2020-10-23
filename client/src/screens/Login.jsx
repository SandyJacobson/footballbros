import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const { username, password } = formData;
  const { error, handleLogin } = props;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='login-container'>
    <form className='login-form' onSubmit={(e)=>{
      e.preventDefault();
      handleLogin(formData);
    }}>
      <h3>Login</h3>
      {
        error &&
        <p>{error}</p>
      }
      <label>
        Username:
        <input
          type="text"
          value={username}
          name="username"
          onChange={handleChange}
        />
        </label>
        <br/>
      <label>
        Password:
        <input
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
        </label>
        <br/>
        <Link to='/register'>Register</Link>
        <br/>
      <button>Login</button>
      </form>
      </div>
  )
}

export default Login