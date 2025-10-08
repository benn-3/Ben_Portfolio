// src/components/Contact.js
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('Message sent successfully');
    } catch (err) {
      alert('Server error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name}
        onChange={e => setFormData({ ...formData, name: e.target.value })} required />
      <input type="email" name="email" placeholder="Email" value={formData.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })} required />
      <textarea name="message" placeholder="Message" value={formData.message}
        onChange={e => setFormData({ ...formData, message: e.target.value })} required />
      <button type="submit">Send Message</button>
    </form>
  );
};
export default Contact;
