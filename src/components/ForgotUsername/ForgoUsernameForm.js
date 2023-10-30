import React, { useState } from 'react';

function ForgotUsernameForm() {
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="login-form">
      {loggedIn ? (
        <div>
          <h2>Welcome</h2>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='login-form'>
          <h1 className='p-head'>Forgot Your UserName ?</h1>
          <p className='sub-head'>We'll help you reset it, and get back on track.</p>
          
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
          <button className='recover-btn' type="submit">Recover UserName(s)</button>
        </form>
      )}
    </div>
    
  );
}

export default ForgotUsernameForm;
