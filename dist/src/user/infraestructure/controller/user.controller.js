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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const api_responses_1 = require("../../../configuration/responses/api-responses");
const catch_error_helper_1 = require("../../../helpers/errors/catch-error.helper");
const generate_jwt_helper_1 = require("../../../helpers/jwt/generate-jwt.helper");
class UserController {
    constructor(userUseCase) {
        this.userUseCase = userUseCase;
        this.getUserById = this.getUserById.bind(this);
        this.postUser = this.postUser.bind(this);
        this.putUser = this.putUser.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.getSqlPrueba = this.getSqlPrueba.bind(this);
        this.signIn = this.signIn.bind(this);
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
                if (passw !== user.password) {
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
                const { password } = user, userClean = __rest(user, ["password"]);
                (0, api_responses_1.message)({
                    res,
                    code: { type: 'SUCCESS', value: 200 },
                    msg: 'Inicio de sesión correcto!',
                    payload: { user: userClean, token }
                });
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
    getUserById({ params }, res) {
        const { id } = params;
        (0, api_responses_1.message)({
            res,
            code: { type: 'SUCCESS', value: 200 },
            msg: `Se acaba de encontrar este usuario con id: ${id}`
        });
    }
    postUser({ body }, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userUseCase.createUser(body);
                if (!user) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'INTERNAL_ERROR', value: 500 },
                        msg: 'Error al crear el usuario'
                    });
                }
                (0, api_responses_1.message)({
                    res,
                    code: { type: 'CREATED', value: 201 },
                    msg: 'Usuario creado correctamente!',
                    payload: user
                });
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
    putUser({ body, params }, res) {
        const { id } = params;
        (0, api_responses_1.message)({
            res,
            code: { type: 'SUCCESS', value: 200 },
            msg: `Actualizar usuario con id ${id}`,
            payload: body
        });
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userUseCase.getAllUser();
                if (!users) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'NOT_FOUND', value: 404 },
                        msg: 'No se encontraron usuarios!'
                    });
                }
                (0, api_responses_1.message)({
                    res,
                    code: { type: 'SUCCESS', value: 200 },
                    msg: 'Todos los usuarios',
                    payload: users
                });
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
    getSqlPrueba(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.userUseCase.getUserBySqlNative();
                (0, api_responses_1.message)({
                    res,
                    code: { type: 'SUCCESS', value: 200 },
                    msg: 'Consulta native hecha correctamente!',
                    payload: data
                });
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map