"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connection_1 = __importDefault(require("../../../../configuration/database/connection"));
const axe_model_1 = require("../../domain/model/axe.model");
const sub_axe_model_1 = require("../../domain/model/sub-axe.model");
const axe_usecase_1 = require("../../application/usecases/axe.usecase");
const axe_controller_1 = require("../controller/axe.controller");
const router = (0, express_1.Router)();
const axeUseCase = new axe_usecase_1.AxeUseCase(connection_1.default.getRepository(axe_model_1.AxeModel), connection_1.default.getRepository(sub_axe_model_1.SubAxeModel));
const axeController = new axe_controller_1.AxeController(axeUseCase);
const { getAxes } = axeController;
router.get('/get-all', getAxes);
exports.default = router;
//# sourceMappingURL=axe.router.js.map