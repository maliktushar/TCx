import { Document, Schema, model } from 'mongoose';

export interface ICourse extends Document {
  name: string;
  skills: string[];
  link: string;
  createdAt: Date;
  updatedAt: Date;
}

const courseSchema = new Schema<ICourse>({
  name: { type: String, required: true },
  skills: { type: [String], required: true },
  link: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Course = model<ICourse>('Course', courseSchema);

export default Course;
