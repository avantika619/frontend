import React, { useState } from 'react';
import { fakeLogin } from './api';
import "./CSS/login.css"
import axios from 'axios'
import {  useNavigate } from 'react-router-dom';

const LoginPopup = ({ onClose, onLoginSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history =  useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/users', {
        username,
        password
      });

      history.push('/');

      // Handle the response, e.g., set user authentication status
      console.log('Login successful:', response.data);
    } catch (error) {
      // Handle login failure
      console.error('Login error:', error.message || 'Network Error');
    }
  }
  return (
    <div>
      <div className="popup-overlay"></div>
      <div className="login-popup">
        <div className="popup-content">
          <h2>Login</h2>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button onClick={()=>handleLogin()}>Submit</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
