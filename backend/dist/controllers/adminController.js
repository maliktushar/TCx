"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLiveProject = exports.editLiveProject = exports.addLiveProject = exports.deleteCourse = exports.editCourse = exports.addCourse = exports.deleteUser = exports.getUserById = exports.getAllUsers = void 0;
const Course_1 = __importDefault(require("../models/Course"));
const LiveProject_1 = __importDefault(require("../models/LiveProject"));
const User_1 = __importDefault(require("../models/User"));
// Get all users
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.find().select('-password');
        res.json(users);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
exports.getAllUsers = getAllUsers;
// Get user by ID
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
exports.getUserById = getUserById;
// Delete user
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield User_1.default.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted successfully' });
    }
    catch (err) {
        const error = err;
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
exports.deleteUser = deleteUser;
// Add course
const addCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, skills, link } = req.body;
        const newCourse = new Course_1.default({ name, skills, link });
        yield newCourse.save();
        res.status(201).json(newCourse);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
exports.addCourse = addCourse;
// Edit course
const editCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield Course_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.json(course);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
exports.editCourse = editCourse;
// Delete course
const deleteCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Course_1.default.findByIdAndDelete(req.params.id);
        res.json({ message: 'Course deleted successfully' });
    }
    catch (err) {
        const error = err;
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
exports.deleteCourse = deleteCourse;
// Add live project
const addLiveProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, skills, link } = req.body;
        const newLiveProject = new LiveProject_1.default({ name, skills, link });
        yield newLiveProject.save();
        res.status(201).json(newLiveProject);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
exports.addLiveProject = addLiveProject;
// Edit live project
const editLiveProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const liveProject = yield LiveProject_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!liveProject) {
            return res.status(404).json({ message: 'Live Project not found' });
        }
        res.json(liveProject);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
exports.editLiveProject = editLiveProject;
// Delete live project
const deleteLiveProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield LiveProject_1.default.findByIdAndDelete(req.params.id);
        res.json({ message: 'Live Project deleted successfully' });
    }
    catch (err) {
        const error = err;
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
exports.deleteLiveProject = deleteLiveProject;
