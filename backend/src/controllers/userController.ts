import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import Otp from '../models/Otp';
import User from '../models/User';

interface RequestWithUser extends Request {
  user: JwtPayload;
}

interface JwtPayload {
  id: string;
  isAdmin: boolean;
}

// Setup nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Generate OTP
const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Helper function to send OTP email
const sendOtpEmail = async (email: string, otp: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  };
  await transporter.sendMail(mailOptions);
};

// Register User
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;

    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const otp = generateOtp();
    const newOtp = new Otp({ email, otp });
    await newOtp.save();

    await sendOtpEmail(email, otp);

    res.status(201).json({ message: 'User registered successfully. Check your email for OTP.' });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: 'Server error', error: err.message });
    } else {
      res.status(500).json({ message: 'Server error', error: 'An unknown error occurred' });
    }
  }
}

// Verify OTP
export const verifyOtp = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;

    const otpRecord = await Otp.findOne({ email, otp });
    if (!otpRecord) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    await Otp.deleteOne({ email, otp });

    res.json({ message: 'Email verified successfully' });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: 'Server error', error: err.message });
    } else {
      res.status(500).json({ message: 'Server error', error: 'An unknown error occurred' });
    }
  }
}

// Login User
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;

    const user = await User.findOne({ $or: [{ email }, { username }] });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    res.json({ token, userId: user._id });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: 'Server error', error: err.message });
    } else {
      res.status(500).json({ message: 'Server error', error: 'An unknown error occurred' });
    }
  }}

// Get User
export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: 'Server error', error: err.message });
    } else {
      res.status(500).json({ message: 'Server error', error: 'An unknown error occurred' });
    }
  }}

// Update User
export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const updates = req.body;
    Object.assign(user, updates);

    await user.save();
    res.json({ message: 'User updated successfully' });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: 'Server error', error: err.message });
    } else {
      res.status(500).json({ message: 'Server error', error: 'An unknown error occurred' });
    }
  }}

// Delete User
export const deleteUser = async (req: Request, res: Response) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: 'Server error', error: err.message });
    } else {
      res.status(500).json({ message: 'Server error', error: 'An unknown error occurred' });
    }
  }}

// Forgot Password
export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const otp = generateOtp();
    const newOtp = new Otp({ email, otp });
    await newOtp.save();

    await sendOtpEmail(email, otp);

    res.json({ message: 'OTP sent to your email' });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: 'Server error', error: err.message });
    } else {
      res.status(500).json({ message: 'Server error', error: 'An unknown error occurred' });
    }
  }}

// Reset Password
export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { email, otp, newPassword } = req.body;

    const otpRecord = await Otp.findOne({ email, otp });
    if (!otpRecord) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    await User.updateOne({ email }, { password: hashedPassword });
    await Otp.deleteOne({ email, otp });

    res.json({ message: 'Password reset successfully' });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: 'Server error', error: err.message });
    } else {
      res.status(500).json({ message: 'Server error', error: 'An unknown error occurred' });
    }
  }};

// Profile Management
export const updateUserProfile = async (req: RequestWithUser, res: Response) => {
  const userId = req.user.id;
  const updates = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    Object.assign(user.profileDetails, updates);

    user.profileCompleted = Object.values(user.profileDetails).every(detail => detail);

    await user.save();

    res.json({ message: 'Profile updated successfully.' });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ message: 'Server error', error: err.message });
    } else {
      res.status(500).json({ message: 'Server error', error: 'An unknown error occurred' });
    }
  }};

