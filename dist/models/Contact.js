"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../database/index"));
var ContactSchema = new index_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: Number,
    message: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});
exports.default = index_1.default.model('Contact', ContactSchema);
