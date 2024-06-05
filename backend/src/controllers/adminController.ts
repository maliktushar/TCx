import { Request, Response } from 'express';
import Course from '../models/Course';
import LiveProject from '../models/LiveProject';
import User from '../models/User';

// Get all users
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get user by ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Delete user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Add course
export const addCourse = async (req: Request, res: Response) => {
  try {
    const { name, skills, link } = req.body;
    const newCourse = new Course({ name, skills, link });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Edit course
export const editCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete course
export const deleteCourse = async (req: Request, res: Response) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: 'Course deleted successfully' });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Add live project
export const addLiveProject = async (req: Request, res: Response) => {
  try {
    const { name, skills, link } = req.body;
    const newLiveProject = new LiveProject({ name, skills, link });
    await newLiveProject.save();
    res.status(201).json(newLiveProject);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Edit live project
export const editLiveProject = async (req: Request, res: Response) => {
  try {
    const liveProject = await LiveProject.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!liveProject) {
      return res.status(404).json({ message: 'Live Project not found' });
    }
    res.json(liveProject);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete live project
export const deleteLiveProject = async (req: Request, res: Response) => {
  try {
    await LiveProject.findByIdAndDelete(req.params.id);
    res.json({ message: 'Live Project deleted successfully' });
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};