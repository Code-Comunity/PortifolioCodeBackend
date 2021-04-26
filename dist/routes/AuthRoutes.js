"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AuthController_1 = __importDefault(require("../controllers/AuthController"));
var AuthRouter = express_1.Router();
AuthRouter.post('/api/createuser', AuthController_1.default.CreateUser);
AuthRouter.delete('/api/deleteuser/:_id', AuthController_1.default.DeleteUser);
AuthRouter.post('/api/adminauth', AuthController_1.default.Authenticate);
exports.default = AuthRouter;
