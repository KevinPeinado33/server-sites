"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connection_1 = __importDefault(require("../../../configuration/database/connection"));
const user_usecase_1 = require("../../application/usecases/user.usecase");
const user_controller_1 = require("../controller/user.controller");
const user_model_1 = require("../../domain/model/user.model");
const router = (0, express_1.Router)();
const userUseCase = new user_usecase_1.UserUseCase(connection_1.default.getRepository(user_model_1.UserModel));
const userController = new user_controller_1.UserController(userUseCase);
const { getUserById, postUser, putUser, getUsers } = userController;
router.post('/create', postUser);
router.get('/get-all', getUsers);
router.get('/:id', getUserById);
router.put('/update/:id', putUser);
exports.default = router;
//# sourceMappingURL=user.router.js.map