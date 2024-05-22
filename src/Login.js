// Login.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container"  style={{ backgroundColor: '#f0f0f0' }}>
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="signup-link">
        <p>Don't have an account?</p>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </div>
  );
}

export default Login;
