import { CreateRoleDto } from './dto/create-role.dto';
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { RolesService } from './roles.service'


@Controller('roles')
export class RolesController {
    constructor(private rolService: RolesService) {}

    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.rolService.createRole(dto)

    }

    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.rolService.getRoleByValue(value)

    }

}
