import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  profileCompleted: boolean;
  profileDetails: {
    college?: string;
    graduationYear?: number;
    company?: string;
    yearsOfExperience?: number;
    domain?: string;
    resume?: string;
    profilePicture?: string;
    linkedinId?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  profileCompleted: { type: Boolean, default: false },
  profileDetails: {
    college: { type: String },
    graduationYear: { type: Number },
    company: { type: String },
    yearsOfExperience: { type: Number },
    domain: { type: String },
    resume: { type: String },
    profilePicture: { type: String },
    linkedinId: { type: String },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
