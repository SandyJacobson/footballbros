import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from './layouts/Layout';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import { Route, useHistory, Switch } from 'react-router-dom';
import MainContainer from './containers/MainContainer';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData)
    }
    handleVerify();
  }, [])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }


  return (
    <div className="App">
       <Layout
      currentUser={currentUser}
      handleLogout={handleLogout}
      >
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        <Route exact path='/login'>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route exact path='/register'>
          <Register handleRegister={handleRegister} />
        </Route>
        <Route path='/'>
          <MainContainer />
          </Route>
      </Switch>
    </Layout>

    </div>
  );
}

export default App;
