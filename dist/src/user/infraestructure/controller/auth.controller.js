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
exports.AuthController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generate_jwt_helper_1 = require("../../../helpers/jwt/generate-jwt.helper");
const api_responses_1 = require("../../../configuration/responses/api-responses");
const catch_error_helper_1 = require("../../../helpers/errors/catch-error.helper");
class AuthController {
    constructor(userUseCase) {
        this.userUseCase = userUseCase;
        this.signIn = this.signIn.bind(this);
        this.validateJWT = this.signIn.bind(this);
    }
    signIn({ body }, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, passw } = body;
            try {
                const user = yield this.userUseCase.findUserByEmail(email);
                if (!user) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'BAD_REQUEST', value: 400 },
                        msg: `El correo ${email}, no se ha encontrado.`
                    });
                }
                const isCorrectPassword = yield bcrypt_1.default.compare(passw, user.password);
                if (!isCorrectPassword) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'BAD_REQUEST', value: 400 },
                        msg: `Contraseña incorrecta!`
                    });
                }
                if (!user.isActive) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'BAD_REQUEST', value: 400 },
                        msg: `El usuario ${user.names} está desactivado!`
                    });
                }
                const token = yield (0, generate_jwt_helper_1.generateKey)(user.id);
                (0, api_responses_1.message)({
                    res,
                    code: { type: 'SUCCESS', value: 200 },
                    msg: 'Inicio de sesión correcto!',
                    payload: { user, token }
                });
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
    validateJWT(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = req.header('x-token');
            const secretKey = process.env.SECRET_KEY || '';
            if (!token) {
                return (0, api_responses_1.message)({
                    res,
                    code: { type: 'UNAUTHORIZED', value: 401 },
                    msg: 'No hay token en la petición!'
                });
            }
            try {
                const { uuid } = jsonwebtoken_1.default.verify(token, secretKey);
                const user = yield this.userUseCase.findUserById(uuid);
                if (!user) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'UNAUTHORIZED', value: 401 },
                        msg: 'Token no valido, usuario no existe en BBDD.'
                    });
                }
                next();
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map