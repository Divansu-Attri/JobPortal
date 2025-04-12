
import Job from '../models/Jobs.js';

export const createJob = async (req, res) => {
  const job = await Job.create({ ...req.body, postedBy: req.user._id });
  console.log("job id ",job._id)
  res.status(201).json(job);
};

export const getJobs = async (req, res) => {
  const jobs = await Job.find().populate('postedBy', 'name');
  res.json(jobs);
};

export const applyJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ message: 'Job not found' });

  job.applicants.push({ user: req.user._id });
  await job.save();

  res.json({ message: 'Applied successfully' });
};