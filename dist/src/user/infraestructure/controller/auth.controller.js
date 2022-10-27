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
const generate_jwt_helper_1 = require("../../../helpers/jwt/generate-jwt.helper");
const api_responses_1 = require("../../../configuration/responses/api-responses");
const catch_error_helper_1 = require("../../../helpers/errors/catch-error.helper");
class AuthController {
    constructor(userUseCase) {
        this.userUseCase = userUseCase;
        this.signIn = this.signIn.bind(this);
    }
    /**
     * Para iniciar sesion en al app hay 2 maneras de hacerlo, las cuales son
     * modo profesor y modo adminisrador, el modo profesor recibimos unicamente
     * el correo, para verificar en la white list y crearle su JWT; y
     * el modo administrador es con correo y contrasenia.
     *
     * @param param0
     * @param res
     * @returns
     */
    signIn({ body }, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, passw } = body;
            const isTeacher = Boolean(email) && !Boolean(passw);
            let token;
            try {
                const user = yield this.userUseCase.findUserByEmail(email);
                if (!user) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'BAD_REQUEST', value: 400 },
                        msg: `El correo ${email}, no se ha encontrado.`
                    });
                }
                if (!user.isActive) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'BAD_REQUEST', value: 400 },
                        msg: `El usuario ${user.names} está desactivado!`
                    });
                }
                if (isTeacher) {
                    token = yield (0, generate_jwt_helper_1.generateKey)(user.id);
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'SUCCESS', value: 200 },
                        msg: `Bienvenido profesor ${user.names} !`,
                        payload: { user, token }
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
                token = yield (0, generate_jwt_helper_1.generateKey)(user.id);
                (0, api_responses_1.message)({
                    res,
                    code: { type: 'SUCCESS', value: 200 },
                    msg: `Bienvenido ${user.names} !`,
                    payload: { user, token }
                });
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map