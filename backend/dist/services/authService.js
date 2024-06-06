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
exports.updateUserProfile = exports.resetPassword = exports.forgotPassword = exports.loginUser = exports.verifyOtp = exports.registerUser = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = 'http://localhost:5000/api';
const registerUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.post(`${API_URL}/auth/register`, userData);
    return response.data;
});
exports.registerUser = registerUser;
const verifyOtp = (otpData) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.post(`${API_URL}/auth/verify-otp`, otpData);
    return response.data;
});
exports.verifyOtp = verifyOtp;
const loginUser = (loginData) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.post(`${API_URL}/auth/login`, loginData);
    return response.data;
});
exports.loginUser = loginUser;
const forgotPassword = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.post(`${API_URL}/auth/forgot-password`, { email });
    return response.data;
});
exports.forgotPassword = forgotPassword;
const resetPassword = (resetData) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.post(`${API_URL}/auth/reset-password`, resetData);
    return response.data;
});
exports.resetPassword = resetPassword;
const updateUserProfile = (profileData, token) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.put(`${API_URL}/profile`, profileData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});
exports.updateUserProfile = updateUserProfile;
