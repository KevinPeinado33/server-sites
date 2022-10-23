"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = void 0;
const message = ({ res, code, msg, payload, error }) => {
    switch (code.type) {
        case 'NOT_FOUND':
        case 'BAD_REQUEST':
        case 'UNAUTHORIZED':
        case 'INTERNAL_ERROR':
            res.status(code.value).json({
                msg,
                error: error !== null && error !== void 0 ? error : null
            });
            break;
        case 'CREATED':
        case 'SUCCESS':
            res.status(code.value).json({
                msg,
                data: payload !== null && payload !== void 0 ? payload : null
            });
            break;
    }
};
exports.message = message;
//# sourceMappingURL=api-responses.js.map