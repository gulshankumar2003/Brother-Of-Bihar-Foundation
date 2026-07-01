import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, default: '' },
    impact: { type: String, default: '' },
    imageUrl: { type: String, default: '' },
    status: {
      type: String,
      enum: ['ongoing', 'completed', 'planned'],
      default: 'ongoing',
    },
    startDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
