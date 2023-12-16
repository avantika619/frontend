import React, { useEffect, useState } from 'react';
import { fakeLogin } from './api';

useEffect(()=>{
  Login();
  
},[username,password])

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const credentials = { username, password };
      const user = await fakeLogin(credentials);
      console.log('Logged in user:', user);
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };


return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
