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
const axios_1 = __importDefault(require("axios"));
const API_URL = 'http://localhost:5000/api';
const getAllUsers = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`${API_URL}/admin/users`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});
exports.getAllUsers = getAllUsers;
const getUserById = (id, token) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`${API_URL}/admin/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});
exports.getUserById = getUserById;
const deleteUser = (id, token) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.delete(`${API_URL}/admin/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});
exports.deleteUser = deleteUser;
const addCourse = (courseData, token) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.post(`${API_URL}/admin/courses`, courseData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});
exports.addCourse = addCourse;
const editCourse = (id, courseData, token) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.put(`${API_URL}/admin/courses/${id}`, courseData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});
exports.editCourse = editCourse;
const deleteCourse = (id, token) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.delete(`${API_URL}/admin/courses/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});
exports.deleteCourse = deleteCourse;
const addLiveProject = (projectData, token) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.post(`${API_URL}/admin/live-projects`, projectData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});
exports.addLiveProject = addLiveProject;
const editLiveProject = (id, projectData, token) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.put(`${API_URL}/admin/live-projects/${id}`, projectData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});
exports.editLiveProject = editLiveProject;
const deleteLiveProject = (id, token) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.delete(`${API_URL}/admin/live-projects/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
});
exports.deleteLiveProject = deleteLiveProject;
