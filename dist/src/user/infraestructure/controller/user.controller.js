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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const api_responses_1 = require("../../../configuration/responses/api-responses");
class UserController {
    constructor(userUseCase) {
        this.userUseCase = userUseCase;
        this.getUserById = this.getUserById.bind(this);
        this.postUser = this.postUser.bind(this);
        this.putUser = this.putUser.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.getSqlPrueba = this.getSqlPrueba.bind(this);
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
                return (0, api_responses_1.message)({
                    res,
                    code: { type: 'INTERNAL_ERROR', value: 500 },
                    msg: 'Ops, Error con el servidor',
                    error
                });
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
                return (0, api_responses_1.message)({
                    res,
                    code: { type: 'INTERNAL_ERROR', value: 500 },
                    msg: 'Ops, error con el servidor!',
                    error
                });
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
                return (0, api_responses_1.message)({
                    res,
                    code: { type: 'INTERNAL_ERROR', value: 500 },
                    msg: 'Ops, error con el servidor!',
                    error
                });
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map