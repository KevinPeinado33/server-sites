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
exports.validateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../../user/domain/model/user.model");
const api_responses_1 = require("../../configuration/responses/api-responses");
const catch_error_helper_1 = require("../../helpers/errors/catch-error.helper");
const validateJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
        const user = yield user_model_1.UserModel.findOne({
            where: { id: Number(uuid) }
        });
        if (!user) {
            return (0, api_responses_1.message)({
                res,
                code: { type: 'UNAUTHORIZED', value: 401 },
                msg: 'Token no valido, usuario no existe en BBDD.'
            });
        }
        req.user = user;
        next();
    }
    catch (error) {
        (0, catch_error_helper_1.catchError)(error, res);
    }
});
exports.validateJWT = validateJWT;
//# sourceMappingURL=validate-jwt.middleware.js.map