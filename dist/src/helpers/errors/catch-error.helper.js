"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchError = void 0;
const api_responses_1 = require("../../configuration/responses/api-responses");
const catchError = (error, res, msg = 'Oops, error con el servidor!') => (0, api_responses_1.message)({
    res,
    code: { type: 'INTERNAL_ERROR', value: 500 },
    msg,
    error
});
exports.catchError = catchError;
//# sourceMappingURL=catch-error.helper.js.map