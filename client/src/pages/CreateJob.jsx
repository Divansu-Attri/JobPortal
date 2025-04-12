import React, { useState } from 'react';
import axios from 'axios';

const CreateJob = () => {
  const [formData, setFormData] = useState({ title: '', description: '', location: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/jobs', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Job created');
    } catch (err) {
      console.error(err);
      alert('Failed to create job');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" name="title" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea name="description" className="form-control" onChange={handleChange} required></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input type="text" name="location" className="form-control" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Post Job</button>
      </form>
    </div>
  );
};

export default CreateJob;