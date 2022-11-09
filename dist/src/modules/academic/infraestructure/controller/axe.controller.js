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
exports.AxeController = void 0;
const api_responses_1 = require("../../../../configuration/responses/api-responses");
const catch_error_helper_1 = require("../../../../helpers/errors/catch-error.helper");
const consts_general_helpers_1 = require("../../../../helpers/consts/consts-general.helpers");
class AxeController {
    constructor(axeUseCase) {
        this.axeUseCase = axeUseCase;
        this.getAxes = this.getAxes.bind(this);
    }
    getAxes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const results = yield this.axeUseCase.getAllAxesAndSubAxes();
                if (consts_general_helpers_1.SIZE_VALUE_ZERO === results.length) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'NOT_FOUND', value: 404 },
                        msg: 'No hay ejes academicos que mostrar!'
                    });
                }
                (0, api_responses_1.message)({
                    res,
                    code: { type: 'SUCCESS', value: 200 },
                    msg: 'Todos los ejes encontrados en BBDD!',
                    payload: results
                });
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
}
exports.AxeController = AxeController;
//# sourceMappingURL=axe.controller.js.map