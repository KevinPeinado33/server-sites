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
exports.EjeController = void 0;
const api_responses_1 = require("../../../configuration/responses/api-responses");
const catch_error_helper_1 = require("../../../helpers/errors/catch-error.helper");
class EjeController {
    constructor(ejeUseCase) {
        this.ejeUseCase = ejeUseCase;
        this.SIZE_VALUE_NULL = 0;
        this.getEjes = this.getEjes.bind(this);
    }
    getEjes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const results = yield this.ejeUseCase.getAllEjes();
                if (this.SIZE_VALUE_NULL === results.length) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'NOT_FOUND', value: 404 },
                        msg: 'No hay ejes registrados en base de datos!'
                    });
                }
                (0, api_responses_1.message)({
                    res,
                    code: { type: 'SUCCESS', value: 200 },
                    msg: 'Lista de todos los ejes y sub ejes.',
                    payload: results
                });
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
}
exports.EjeController = EjeController;
//# sourceMappingURL=eje.controller.js.map