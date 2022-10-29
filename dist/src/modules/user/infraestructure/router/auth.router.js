"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connection_1 = __importDefault(require("../../../../configuration/database/connection"));
const user_model_1 = require("../../domain/model/user.model");
const user_repository_1 = require("../../application/repository/user.repository");
const user_usecase_1 = require("../../application/usecases/user.usecase");
const auth_controller_1 = require("../controller/auth.controller");
const router = (0, express_1.Router)();
const userRepository = new user_repository_1.UserRepository(connection_1.default.getRepository(user_model_1.UserModel));
const userUseCase = new user_usecase_1.UserUseCase(connection_1.default.getRepository(user_model_1.UserModel), userRepository);
const authController = new auth_controller_1.AuthController(userUseCase);
const { signIn } = authController;
router.post('/sign-in', signIn);
// TODO agregar endpoints para el inicio de sesion con google.
exports.default = router;
//# sourceMappingURL=auth.router.js.map