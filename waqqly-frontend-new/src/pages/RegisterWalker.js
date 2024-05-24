import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Import the common CSS file for both forms

const RegisterWalker = () => {
  const [walker, setWalker] = useState({
    name: '',
    age: '',
    experience: '',
    contact: '',
    location: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWalker({
      ...walker,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Walker data to be sent:', walker);
    try {
      const response = await axios.post('http://localhost:5000/api/walkers/register', walker);
      console.log('Walker registered:', response.data);
      setMessage('Walker registered successfully!');
    } catch (error) {
      console.error('There was an error registering the walker!', error);
      setMessage('There was an error registering the walker.');
    }
  };

  return (
    <div className="register-page">
      <h1>Register Walker</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={walker.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="number" name="age" value={walker.age} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Experience (years)</label>
          <input type="number" name="experience" value={walker.experience} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Contact</label>
          <input type="text" name="contact" value={walker.contact} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input type="text" name="location" value={walker.location} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Register Walker</button>
      </form>
    </div>
  );
};

export default RegisterWalker;
