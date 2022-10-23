export type CodeResponseType = 
    | { type: 'SUCCESS',        value: 200 }
    | { type: 'INTERNAL_ERROR', value: 500 }
    | { type: 'BAD_REQUEST',    value: 400 }
    | { type: 'NOT_FOUND',      value: 404 }
    | { type: 'CREATED',        value: 201 }
    | { type: 'UNAUTHORIZED',   value: 401 }