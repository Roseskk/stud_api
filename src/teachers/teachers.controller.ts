import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { TeachersService } from "./teachers.service";
import { Teacher } from "./entities/teacher.entity";

@ApiTags('teachers')
@Controller('teachers')
export class TeachersController {
    constructor(private readonly teacherService: TeachersService) {}

    @ApiOperation({ summary: 'Получить всех учителей' })
    @ApiResponse({ status: 200, description: 'Список всех учителей', type: [Teacher] })
    @Get()
    findAll() {
        return this.teacherService.findAll()
    }

    @ApiOperation({ summary: 'Получить учителя по ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID учителя' })
    @ApiResponse({ status: 200, description: 'Возвращает учителя по ID', type: Teacher })
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.teacherService.findOne(id)
    }

    @ApiOperation({ summary: 'Создать нового учителя' })
    @ApiBody({ type: Teacher, description: 'Данные для нового учителя' })
    @ApiResponse({ status: 201, description: 'Новый учитель создан', type: Teacher })
    @Post()
    create(@Body() teacher: Teacher) {
        return this.teacherService.create(teacher);
    }

    @ApiOperation({ summary: 'Обновить учителя' })
    @ApiParam({ name: 'id', type: Number, description: 'ID учителя для обновления' })
    @ApiBody({ type: Teacher, description: 'Новые данные для учителя' })
    @ApiResponse({ status: 200, description: 'Учитель обновлен', type: Teacher })
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() teacher: Partial<Teacher>) {
        return this.teacherService.update(id, teacher);
    }

    @ApiOperation({ summary: 'Удалить учителя' })
    @ApiParam({ name: 'id', type: Number, description: 'ID учителя для удаления' })
    @ApiResponse({ status: 200, description: 'Учитель удален' })
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.teacherService.delete(id);
    }
}
