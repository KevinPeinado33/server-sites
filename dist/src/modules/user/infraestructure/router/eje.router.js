"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connection_1 = __importDefault(require("../../../../configuration/database/connection"));
const axe_model_1 = require("../../../academic/domain/model/axe.model");
const sub_axe_model_1 = require("../../../academic/domain/model/sub-axe.model");
const eje_usecase_1 = require("../../application/usecases/eje.usecase");
const eje_controller_1 = require("../controller/eje.controller");
const router = (0, express_1.Router)();
const ejeUseCase = new eje_usecase_1.EjeUseCase(connection_1.default.getRepository(axe_model_1.EjeModel), connection_1.default.getRepository(sub_axe_model_1.SubEjeModel));
const ejeController = new eje_controller_1.EjeController(ejeUseCase);
const { getEjes } = ejeController;
router.get('/get-all-ejes', getEjes);
exports.default = router;
//# sourceMappingURL=eje.router.js.map