import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  applicants: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      appliedAt: { type: Date, default: Date.now }
    }
  ]
}, { timestamps: true });

export default mongoose.model('Job', jobSchema);