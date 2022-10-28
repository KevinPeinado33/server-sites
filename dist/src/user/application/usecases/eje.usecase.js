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
exports.EjeUseCase = void 0;
class EjeUseCase {
    constructor(ejeRepository, subRepository) {
        this.ejeRepository = ejeRepository;
        this.subRepository = subRepository;
    }
    getAllEjes() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield this.ejeRepository.findAll();
            const ejes = yield Promise.all(results.map((eje) => __awaiter(this, void 0, void 0, function* () {
                const resultsSub = yield this.getSubEjesByIdEje(eje.id);
                const obj = Object.assign({}, eje);
                obj.subEjes = resultsSub;
                return obj;
            })));
            return ejes;
        });
    }
    getSubEjesByIdEje(idEje) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.subRepository.findAll({ where: { idEje } });
        });
    }
}
exports.EjeUseCase = EjeUseCase;
//# sourceMappingURL=eje.usecase.js.map