import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { StudUsersService } from './stud-users.service';
import { StudUser } from './entities/stud-user.entity';

@ApiTags('stud-users')
@Controller('stud-users')
export class StudUsersController {
    constructor(private readonly studUsersService: StudUsersService) {}

    @ApiOperation({ summary: 'Получить всех пользователей' })
    @ApiResponse({ status: 200, description: 'Список всех пользователей', type: [StudUser] })
    @Get()
    findAll() {
        return this.studUsersService.findAll();
    }

    @ApiOperation({ summary: 'Получить пользователя по ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID пользователя' })
    @ApiResponse({ status: 200, description: 'Возвращает пользователя по ID', type: StudUser })
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.studUsersService.findOne(id);
    }

    @ApiOperation({ summary: 'Создать нового пользователя' })
    @ApiBody({ type: StudUser, description: 'Данные для нового пользователя' })
    @ApiResponse({ status: 201, description: 'Новый пользователь создан', type: StudUser })
    @Post()
    create(@Body() studUser: StudUser) {
        return this.studUsersService.create(studUser);
    }

    @ApiOperation({ summary: 'Обновить пользователя' })
    @ApiParam({ name: 'id', type: Number, description: 'ID пользователя для обновления' })
    @ApiBody({ type: StudUser, description: 'Новые данные для пользователя' })
    @ApiResponse({ status: 200, description: 'Пользователь обновлен', type: StudUser })
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() studUser: Partial<StudUser>) {
        return this.studUsersService.update(id, studUser);
    }

    @ApiOperation({ summary: 'Удалить пользователя' })
    @ApiParam({ name: 'id', type: Number, description: 'ID пользователя для удаления' })
    @ApiResponse({ status: 200, description: 'Пользователь удален' })
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.studUsersService.delete(id);
    }
}
