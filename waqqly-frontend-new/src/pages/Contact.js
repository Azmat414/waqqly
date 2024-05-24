import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file for the Contact page

const Contact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Contact data to be sent:', contact);
    try {
      // You can handle form submission here, e.g., sending data to a backend server
      setMessage('Your message has been sent successfully!');
    } catch (error) {
      console.error('There was an error sending your message!', error);
      setMessage('There was an error sending your message.');
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={contact.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={contact.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" name="subject" value={contact.subject} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" value={contact.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
