import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/jobs/getAllJobs', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setJobs(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Job Listings</h2>
      <div className="row">
        {jobs.map(job => (
          <div className="col-md-4" key={job._id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">{job.description}</p>
                <p className="card-text"><small className="text-muted">{job.location}</small></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;