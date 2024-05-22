// Signup.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container" style={{ backgroundColor: '#f0f0f0'} }>
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="login-link">
        <p>Already have an account?</p>
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
}

export default Signup;
