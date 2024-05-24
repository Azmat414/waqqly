import React, { useState } from 'react';

const RegisterWalker = () => {
  const [walkerName, setWalkerName] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission, e.g., send data to the backend
    console.log({ walkerName, location, experience, contact });
  };

  return (
    <div>
      <h2>Register as a Dog Walker</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Walker Name:</label>
          <input
            type="text"
            value={walkerName}
            onChange={(e) => setWalkerName(e.target.value)}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Experience:</label>
          <input
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <button type="submit">Register Walker</button>
      </form>
    </div>
  );
};

export default RegisterWalker;