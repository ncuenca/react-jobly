import './App.css';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from 'react';
import JoblyApi from './api';
import jwt from "jsonwebtoken"

function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(function storeUser() {
    async function fetchUser() {
      // store token from login/register process to JoblyApi class
      JoblyApi.token = token;
      
      let { username } = jwt.decode(token);
      let user = JoblyApi.getUser(username)
      setCurrentUser(user);
    }
  }, [token])

  async function login({username, password}) {
    try {
      let token = await JoblyApi.login(username, password);
      setToken(token);
    } catch (err) {
      alert(err.message)
    }
  }

  async function register(user) {
    try {
      let token = await JoblyApi.register(user);
      setToken(token);
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <BrowserRouter>
      <Navbar login={login} register={register} />
      <Routes login={login} register={register} />
    </BrowserRouter>
    
  );
}

export default App;
