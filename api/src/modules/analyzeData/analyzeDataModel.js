import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  id: String,
  locality: String,
  geographicLocation: {
    type: { type: String, default: 'Point' },
    coordinates: [Number],
  },
  severityIndex: Number,
  description: String,
  imageBase64: String,
  timestamp: { type: Date, default: Date.now },
});

const AnalyzeData = model('AnalyzeData', userSchema);

export default AnalyzeData;
