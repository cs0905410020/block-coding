import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'yourusername' && password === 'yourpassword') {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Login failed. Please check your username and password.');
    }
  };

  return (
    <div className="login-form">
      {loggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='login-form'>
          <div className='h-btn'>
          <button className='heading-btn'>Register</button>
          <button className='heading-btn'>Sign In</button>
          </div>
          <div className="form-group text_box">
            <label htmlFor="username"></label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              placeholder='Username'
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="form-group text_box">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button className='login-btn' type="submit">Login</button>
        </form>
      )}
      <div className='login-box2'>
      <a className='a' href='/forgot-password'>Forgot Password?</a>
      <a className='a' href='/forgot-username'>Forgot Username?</a>
      </div>
    </div>
    
  );
}

export default LoginForm;
