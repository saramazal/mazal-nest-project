import { Module } from '@nestjs/common';
import {AppController} from './app.controller'
import {AppService} from './app.service'
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    controllers : [AppController],
    providers: [AppService],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'test',
            models: [],
          }),
    ]
})
export class AppModule{}