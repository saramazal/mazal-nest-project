import { Module } from '@nestjs/common';
import {UsersModule } from './users/users.module';
import{ConfigModule} from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize';
import {User} from './users/users.model';

@Module({
    controllers : [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`

        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRESS_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User],
            autoLoadModels: true
          }),
        UsersModule,
    ]
})
export class AppModule{}