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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const connection_1 = __importDefault(require("../database/connection"));
const swagger_1 = require("../swagger/swagger");
const user_router_1 = __importDefault(require("../../modules/user/infraestructure/router/user.router"));
const auth_router_1 = __importDefault(require("../../modules/user/infraestructure/router/auth.router"));
const academic_router_1 = __importDefault(require("../../modules/academic/infraestructure/router/academic.router"));
const student_router_1 = __importDefault(require("../../modules/student/infraestructure/router/student.router"));
class Server {
    constructor() {
        this.PATH_SWAGGER = '/api-docs';
        this.paths = {
            auth: '/api/auth',
            user: '/api/users',
            eje: '/api/academic',
            student: '/api/students'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`🎯 Server is already on port: ${this.port}`);
        });
    }
    routes() {
        this.app.use(this.paths.user, user_router_1.default);
        this.app.use(this.paths.auth, auth_router_1.default);
        this.app.use(this.paths.eje, academic_router_1.default);
        this.app.use(this.paths.student, student_router_1.default);
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(this.PATH_SWAGGER, swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup((0, swagger_jsdoc_1.default)(swagger_1.options)));
        console.log(`🚛 Swagger is already on: http://localhost:${this.port}${this.PATH_SWAGGER}`);
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('DB is online!');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map