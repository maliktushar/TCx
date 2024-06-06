"use strict";

// const { registerUser } = require("./services/authService");

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const passport = require('passport');


dotenv_1.default.config();
const app = (0, express_1.default)();
const {registerUser,loginUser} = require("./controllers/userController");
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Database connection
mongoose_1.default.connect("mongodb+srv://cloudteam:tIc8siIWftxe4dOJ@tcx.lpkmcp5.mongodb.net/", {
// useNewUrlParser: true,
// useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});
// Routes
app.get('/', (req, res) => {
    res.send('APP is running...');
});
app.post('/register',registerUser)
app.post('/login',loginUser)

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
