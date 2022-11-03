import {
    IsString,
    IsNotEmpty,
    IsEmail,
    IsNumber
} from 'class-validator'

export class UserDto {

    @IsNumber()
    id?: number

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email!: string

    @IsString()
    @IsNotEmpty()
    password!: string

    /* @IsBoolean()
    isActive?: boolean */

}