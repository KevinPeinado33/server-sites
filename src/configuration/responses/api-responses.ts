import { MessageInterface } from './interfaces/api.interfaces'

export const message = ({
    res, 
    code, 
    msg, 
    payload, 
    error
}: MessageInterface) => {

    switch(code.type) {
        
        case 'NOT_FOUND':
        case 'BAD_REQUEST':
        case 'INTERNAL_ERROR':

            res.status(code.value).json({
                msg, 
                error: error ?? null
            })

            break

        case 'CREATED':
        case 'SUCCESS':
            
            res.status(code.value).json({
                msg,
                data: payload ?? null
            })

            break

    }

}
