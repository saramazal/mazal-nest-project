import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@mail.ru', description: 'email'})
    @IsString({message: 'Should be a string'})
    @IsEmail({}, {message: "Incorrect email"})
    readonly email: string;
    @ApiProperty({example: '12345', description: 'password'})
    @IsString({message: 'Should be a string'})
    @Length(4, 16, {message: 'Not less than 4 and no mor than 16'})
    readonly password: string;
}