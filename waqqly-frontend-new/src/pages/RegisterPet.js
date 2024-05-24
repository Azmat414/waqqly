import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Import the common CSS file for both forms

const RegisterPet = () => {
  const [pet, setPet] = useState({
    name: '',
    age: '',
    breed: '',
    ownerName: '',
    ownerContact: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPet({
      ...pet,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Pet data to be sent:', pet);
    try {
      const response = await axios.post('http://localhost:5000/api/pets/register', pet);
      console.log('Pet registered:', response.data);
      setMessage('Pet registered successfully!');
    } catch (error) {
      console.error('There was an error registering the pet!', error);
      setMessage('There was an error registering the pet.');
    }
  };

  return (
    <div className="register-page">
      <h1>Register Pet</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={pet.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="number" name="age" value={pet.age} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Breed</label>
          <input type="text" name="breed" value={pet.breed} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Owner Name</label>
          <input type="text" name="ownerName" value={pet.ownerName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Owner Contact</label>
          <input type="text" name="ownerContact" value={pet.ownerContact} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Register Pet</button>
      </form>
    </div>
  );
};

export default RegisterPet;
