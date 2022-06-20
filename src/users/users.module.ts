import { AuthModule } from './../auth/auth.module';
import { RolesModule } from './../roles/roles.module';
import { User } from './users.model';
import {Role} from '../roles/roles.model'
import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from '@nestjs/sequelize'
import {UserRoles} from '../roles/user-roles.model'


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule,
    forwardRef(() =>  AuthModule),
  ],
  exports: [
    UsersService,
    AuthModule
    
  ]
})
export class UsersModule {}
