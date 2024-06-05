import { Document, Schema, model } from 'mongoose';

export interface ILiveProject extends Document {
  name: string;
  skills: string[];
  link: string;
  createdAt: Date;
  updatedAt: Date;
}

const liveProjectSchema = new Schema<ILiveProject>({
  name: { type: String, required: true },
  skills: { type: [String], required: true },
  link: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const LiveProject = model<ILiveProject>('LiveProject', liveProjectSchema);

export default LiveProject;
