import React, { useState } from 'react';

function ForgotPasswordForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'yourusername') {
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
          <h1 className='p-head'>Forgot Your Password ?</h1>
          <p className='sub-head'>We'll help you reset it, and get back on track.</p>
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
          <div className='or'>
            <h3>OR</h3>
          </div>
          <div className="form-group text_box">
            <label htmlFor="email"></label>
            <input
              type="text"
              id="text"
              name="email"
              placeholder='Email/Guardians Email'
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <button className='reset-btn' type="submit">Reset Password</button>
        </form>
      )}
    </div>
    
  );
}

export default ForgotPasswordForm;
