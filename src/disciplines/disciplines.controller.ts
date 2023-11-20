import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { DisciplinesService } from './disciplines.service';
import { Discipline } from './entities/discipline.entity';

@ApiTags('disciplines')
@Controller('disciplines')
export class DisciplinesController {
    constructor(private readonly disciplinesService: DisciplinesService) {}

    @ApiOperation({ summary: 'Получить все дисциплины' })
    @ApiResponse({ status: 200, description: 'Список всех дисциплин', type: [Discipline] })
    @Get()
    findAll() {
        return this.disciplinesService.findAll();
    }

    @ApiOperation({ summary: 'Получить дисциплину по ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID дисциплины' })
    @ApiResponse({ status: 200, description: 'Возвращает дисциплину по ID', type: Discipline })
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.disciplinesService.findOne(id);
    }

    @ApiOperation({ summary: 'Создать новую дисциплину' })
    @ApiBody({ type: Discipline, description: 'Данные для новой дисциплины' })
    @ApiResponse({ status: 201, description: 'Новая дисциплина создана', type: Discipline })
    @Post()
    create(@Body() discipline: Discipline) {
        return this.disciplinesService.create(discipline);
    }

    @ApiOperation({ summary: 'Обновить дисциплину' })
    @ApiParam({ name: 'id', type: Number, description: 'ID дисциплины для обновления' })
    @ApiBody({ type: Discipline, description: 'Новые данные для дисциплины' })
    @ApiResponse({ status: 200, description: 'Дисциплина обновлена', type: Discipline })
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() discipline: Partial<Discipline>) {
        return this.disciplinesService.update(id, discipline);
    }

    @ApiOperation({ summary: 'Удалить дисциплину' })
    @ApiParam({ name: 'id', type: Number, description: 'ID дисциплины для удаления' })
    @ApiResponse({ status: 200, description: 'Дисциплина удалена' })
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.disciplinesService.delete(id);
    }
}
