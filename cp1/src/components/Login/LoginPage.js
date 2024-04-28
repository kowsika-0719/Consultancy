import React, { useState } from 'react';
import './LoginPage.css';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const lowercaseEmail = email.toLowerCase();
    if (!emailRegex.test(lowercaseEmail)) {
      setError('Invalid email format. Please use a valid Gmail address.');
      return;
    }
    if (email !== lowercaseEmail) {
      setError('Email should be in lowercase');
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password should contain at least one uppercase letter, one lowercase letter, one digit, one special character, and have a minimum length of 8 characters.');
      return;
    }
    if (password === 'password') {
      console.log('Login successful');
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className='root'>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default LoginPage;
