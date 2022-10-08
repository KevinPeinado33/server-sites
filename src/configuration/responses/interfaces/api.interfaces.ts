import { Response } from 'express'
import { CodeResponseType } from '../types/code-responses.types';

export interface MessageInterface {
    res:      Response
    code:     CodeResponseType
    msg:      string
    payload?: any
    error?:   any
}