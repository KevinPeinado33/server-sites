"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateKey = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateKey = (uuid) => {
    return new Promise((resolve, reject) => {
        const secretKey = process.env.SECRET_KEY || '';
        const payload = { uuid };
        jsonwebtoken_1.default.sign(payload, secretKey, { expiresIn: '24h' }, (error, token) => {
            if (error) {
                console.log(error);
                reject('No se pudo generar el token!');
                return;
            }
            resolve(token);
        });
    });
};
exports.generateKey = generateKey;
//# sourceMappingURL=generate-jwt.helper.js.map