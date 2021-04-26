"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PostController_1 = __importDefault(require("../controllers/PostController"));
var ContactController_1 = __importDefault(require("../controllers/ContactController"));
var ActionsRoutes = express_1.Router();
// All of Posts
ActionsRoutes.get('/api/allposts', PostController_1.default.FindPost); //Testado
ActionsRoutes.post('/api/createpost', PostController_1.default.CreatePost); //Testado
ActionsRoutes.delete('/api/deletepost/:_id', PostController_1.default.DeletePost); //Testado
ActionsRoutes.put('/api/editpost/:_id', PostController_1.default.UpdatePost); //Testado
// All of Contact
ActionsRoutes.get('/api/getallmessages', ContactController_1.default.FindMessage); //testado
ActionsRoutes.post('/api/sendmessage', ContactController_1.default.CreateMessage); //testado
ActionsRoutes.delete('/api/deletemessage/:_id', ContactController_1.default.DeleteMessage); //testado
exports.default = ActionsRoutes;
