"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../database/index"));
var PostSchema = new index_1.default.Schema({
    nameProject: {
        type: String,
        required: true
    },
    logoProject: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    justification: {
        type: String,
        required: true
    },
    imageOne: {
        type: String,
        required: true
    },
    imageTwo: {
        type: String,
        required: false
    },
    imageThree: {
        type: String,
        required: false
    }
});
exports.default = index_1.default.model('Post', PostSchema);
