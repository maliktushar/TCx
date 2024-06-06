"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const liveProjectSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    skills: { type: [String], required: true },
    link: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
const LiveProject = (0, mongoose_1.model)('LiveProject', liveProjectSchema);
exports.default = LiveProject;
