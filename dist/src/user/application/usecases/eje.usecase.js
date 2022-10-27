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
            results.map((eje) => __awaiter(this, void 0, void 0, function* () {
                const resultsSub = yield this.getSubEjesByIdEje(eje.id);
                eje.subEjes = [...resultsSub];
                console.log(results);
            }));
            for (let i = 0; i < results.length; i++) {
                const resultsSub = yield this.getSubEjesByIdEje(results[i].id);
                results[i].subEjes = resultsSub;
            }
            return results;
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