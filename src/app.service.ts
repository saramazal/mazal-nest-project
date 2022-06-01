import {Injectable} from '@nestjs/common/'

@Injectable()
export class AppService {
        getUsers(){
            return [
                {"id": 1, "name": 'John'},
                {"id": 2, "name": 'Ann'},
                {"id": 3, "name": 'Dave'},
        ]
    }
}