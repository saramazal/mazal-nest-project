import { Injectable } from '@nestjs/common';
import {User} from "../users/users.model";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";

@Injectable()
export class AuthService {


    async login(userDto: CreateUserDto) {
        
    }

    async registration(userDto: CreateUserDto) {
        

    }
}


