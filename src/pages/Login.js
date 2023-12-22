import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform authentication logic here
    console.log('Username:', username);
    console.log('Password:', password);

    // Check the entered username and navigate accordingly
    if (username.toLowerCase() === 'sysadmin') {
      navigate('/sys-admin-home');
    } else if (username.toLowerCase() === 'schooladmin') {
      navigate('/school-admin-home');
    } else {
      // Handle other cases or show an error message
      console.log('Invalid username');
    }

    // Reset the form fields (optional)
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
