import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from './Registration.module.css'



function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function handleRegistration(event) {
    event.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = storedUsers.find(user => user.username === username || user.email === email);

    if (existingUser) {
      setRegistrationError('Username or email already exists');
      return;
    }

    if (password !== confirmPassword) {
      setRegistrationError('Passwords do not match');
      return;
    }

    const newUser = { username, email, password };

    const updatedUsers = [...storedUsers, newUser];

    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Redirect to home page 
    const confirmation = window.confirm('Registered successfully done! Click ok to go to Login page.');
    if (confirmation) {
      window.location.href = '/login';
    }

  }

  return (
    <div className={Style.RegistrationPage}>
      <div className={Style.leftDiv}>
        <img src='https://trumpwallpapers.com/wp-content/uploads/Workout-Wallpaper-01-1600-x-843.jpg'/>
      </div>

      <form onSubmit={handleRegistration} className={Style.data}>
      <h1>Register </h1>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} required="true" /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required="true" /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required="true" /><br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} required="true" /><br />
        {registrationError && <p>{registrationError}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
