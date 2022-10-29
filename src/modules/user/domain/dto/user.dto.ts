import {
    IsString,
    IsNotEmpty,
    IsBoolean,
    IsEmail,
    IsNumber
} from 'class-validator'

export class UserDto {

    @IsNumber()
    id?: number

    @IsString()
    @IsNotEmpty()
    names!: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email!: string

    @IsString()
    @IsNotEmpty()
    userName!: string

    @IsString()
    @IsNotEmpty()
    password!: string

    @IsBoolean()
    isActive?: boolean

}