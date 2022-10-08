import {
    IsString,
    IsNotEmpty,
    IsBoolean,
    IsEmail
} from 'class-validator'

export class UserDto {

    @IsString()
    id?: string

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