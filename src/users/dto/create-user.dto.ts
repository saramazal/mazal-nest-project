import {ApiProperty} from '@nestjs/swagger'


// Data Transfer Object - data validation

export class CreateUserDto {

    @ApiProperty({example: 'user@gmail.com', description: 'email'})
    readonly email: string;
    @ApiProperty({example: '12312345', description: 'password'})
    readonly password: string;
}