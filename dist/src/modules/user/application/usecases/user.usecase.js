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
exports.UserUseCase = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserUseCase {
    constructor(repository, userRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.HASH_SALT_MAX = 10;
        this.ROLE_TEACHER = 'Profesor';
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcrypt_1.default.genSalt(this.HASH_SALT_MAX);
            user.password = yield bcrypt_1.default.hash(user.password, salt);
            return yield this.repository.create(Object.assign({}, user));
        });
    }
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findAll();
        });
    }
    getUserBySqlNative() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.getUserByQueryNative();
        });
    }
    findUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne({
                where: { email }
            });
        });
    }
    findUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findByPk(id);
        });
    }
}
exports.UserUseCase = UserUseCase;
//# sourceMappingURL=user.usecase.js.map