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
exports.updateUserProfile = exports.resetPassword = exports.forgotPassword = exports.deleteUser = exports.updateUser = exports.getUser = exports.loginUser = exports.verifyOtp = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const Otp_1 = __importDefault(require("../models/Otp"));
const User_1 = __importDefault(require("../models/User"));
const jwt = require('jsonwebtoken');
// Setup nodemailer transporter
const transporter = nodemailer_1.default.createTransport({
    service: 'Gmail',
    auth: {
        user: "onlyforcocindia@gmail.com",
        pass: "Harsheet2.0",
    },
});
// Generate OTP
const generateOtp = () => {
    console.log("Reached Here")
    return Math.floor(100000 + Math.random() * 900000).toString();
};
// Helper function to send OTP email
const sendOtpEmail = (email, otp) => __awaiter(void 0, void 0, void 0, function* () {
    const mailOptions = {
        from: "onlyforcocindia@gmail.com",
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`,
    };
    yield transporter.sendMail(mailOptions);
});
// Register User
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, username, email, password } = req.body;
        const userExists = yield User_1.default.findOne({ $or: [{ email }, { username }] });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 12);
        const newUser = new User_1.default({
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword,
        });
        yield newUser.save();
        // const otp = generateOtp();
        // const newOtp = new Otp_1.default({ email, otp });
        // yield newOtp.save();
        // yield sendOtpEmail(email, otp);
        res.status(201).json({ message: 'User registered successfully. Check your email for OTP.' });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
        else {
            res.status(500).json({ message: 'Server error', error: 'An unknown error occurred' });
        }
    }
});
exports.registerUser = registerUser;
// Verify OTP
const verifyOtp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, otp } = req.body;
        const otpRecord = yield Otp_1.default.findOne({ email, otp });
        if (!otpRecord) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }
        yield Otp_1.default.deleteOne({ email, otp });
        res.json({ message: 'Email verified successfully' });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
        else {
            res.status(500).json({ message: 'Server error', error: 'An unknown error occurred' });
        }
    }
});
exports.verifyOtp = verifyOtp;
// Login User
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, username, password } = req.body;
        const user = yield User_1.default.findOne({ $or: [{ email }, { username }] });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, "Harsheet ne Banaya", { expiresIn: '15m' });
        const refreshToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, "Harsheet ne Refresh Banaya", { expiresIn: '7d' });
        res.cookie('accessToken', accessToken, { httpOnly: true, secure: true, maxAge: 15 * 60 * 1000 });
        res.json({ accessToken, refreshToken });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
        else {
            res.status(500).json({ message: 'Server error', error: 'An unknown error occurred' });
        }
    }
});
exports.loginUser = loginUser;
// Get User
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id)
    try {
        // console.log("i am here")
        const user = User_1.default.findById(id).select('-password');
        console.log("i am here")
        if (!user) {
            return "User Not Found"
        }
        
        return user;
    }
    catch (err) {
        if (err instanceof Error) {
            return "Server Error"
        }
        else {
            return "Server Error"
        }
    }
});
exports.getUser = getUser;
// Update User
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const updates = req.body;
        Object.assign(user, updates);
        yield user.save();
        res.json({ message: 'User updated successfully' });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
        else {
            res.status(500).json({ message: 'Server error', error: 'An unknown error occurred' });
        }
    }
});
exports.updateUser = updateUser;
// Delete User
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield User_1.default.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted successfully' });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
        else {
            res.status(500).json({ message: 'Server error', error: 'An unknown error occurred' });
        }
    }
});
exports.deleteUser = deleteUser;
// Forgot Password
const forgotPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const user = yield User_1.default.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const otp = generateOtp();
        const newOtp = new Otp_1.default({ email, otp });
        yield newOtp.save();
        yield sendOtpEmail(email, otp);
        res.json({ message: 'OTP sent to your email' });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
        else {
            res.status(500).json({ message: 'Server error', error: 'An unknown error occurred' });
        }
    }
});
exports.forgotPassword = forgotPassword;
// Reset Password
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, otp, newPassword } = req.body;
        const otpRecord = yield Otp_1.default.findOne({ email, otp });
        if (!otpRecord) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }
        const hashedPassword = yield bcryptjs_1.default.hash(newPassword, 12);
        yield User_1.default.updateOne({ email }, { password: hashedPassword });
        yield Otp_1.default.deleteOne({ email, otp });
        res.json({ message: 'Password reset successfully' });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
        else {
            res.status(500).json({ message: 'Server error', error: 'An unknown error occurred' });
        }
    }
});
exports.resetPassword = resetPassword;
// Profile Management
const updateUserProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.id;
    const updates = req.body;
    try {
        const user = yield User_1.default.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        Object.assign(user.profileDetails, updates);
        user.profileCompleted = Object.values(user.profileDetails).every(detail => detail);
        yield user.save();
        res.json({ message: 'Profile updated successfully.' });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
        else {
            res.status(500).json({ message: 'Server error', error: 'An unknown error occurred' });
        }
    }
});
exports.updateUserProfile = updateUserProfile;
