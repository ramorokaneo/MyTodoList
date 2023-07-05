import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Registration() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch registration action or perform API request
    // Here you can use Redux or any other method to handle registration logic
    // For simplicity, we'll just log the user details for now
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Gender:', gender);
    console.log('Password:', password);
    console.log('ConfirmPassword:', confirmPassword);

    // Clear the form fields
    setName('');
    setEmail('');
    setGender('');
    setPassword('');
    setConfirmPassword('');

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <br />
        <div>
          <label>Email</label>
          <br />
          <input type="text" value={email} onChange={handleEmailChange} />
        </div>
        <br />
        <div>
          <label>Gender</label>
          <br />
          <label>
            <input type="radio" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
            Male
          </label>
          <label>
            <input type="radio" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
            Female
          </label>
          <label>
            <input type="radio" value="other" checked={gender === 'other'} onChange={handleGenderChange} />
            Other
          </label>
        </div>
        <br />
        <div>
          <label>Password</label>
          <br />
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <br />
        <div>
          <label>Confirm Password</label>
          <br />
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        <br />
        <p>By creating an account, you agree to our <a href="#">Terms & Privacy</a>.</p>
        <button type="submit">Register</button>
      </form>
      <br />
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Registration;