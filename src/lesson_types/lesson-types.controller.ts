import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { LessonTypesService } from './lesson-types.service';
import { LessonType } from './entities/lesson-type.entity';

@ApiTags('lesson-types')
@Controller('lesson-types')
export class LessonTypesController {
    constructor(private readonly lessonTypesService: LessonTypesService) {}

    @ApiOperation({ summary: 'Получить все типы уроков' })
    @ApiResponse({ status: 200, description: 'Список всех типов уроков', type: [LessonType] })
    @Get()
    findAll() {
        return this.lessonTypesService.findAll();
    }

    @ApiOperation({ summary: 'Получить тип урока по ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID типа урока' })
    @ApiResponse({ status: 200, description: 'Возвращает тип урока по ID', type: LessonType })
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.lessonTypesService.findOne(id);
    }

    @ApiOperation({ summary: 'Создать новый тип урока' })
    @ApiBody({ type: LessonType, description: 'Данные для нового типа урока' })
    @ApiResponse({ status: 201, description: 'Новый тип урока создан', type: LessonType })
    @Post()
    create(@Body() lessonType: LessonType) {
        return this.lessonTypesService.create(lessonType);
    }

    @ApiOperation({ summary: 'Обновить тип урока' })
    @ApiParam({ name: 'id', type: Number, description: 'ID типа урока для обновления' })
    @ApiBody({ type: LessonType, description: 'Новые данные для типа урока' })
    @ApiResponse({ status: 200, description: 'Тип урока обновлен', type: LessonType })
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() lessonType: Partial<LessonType>) {
        return this.lessonTypesService.update(id, lessonType);
    }

    @ApiOperation({ summary: 'Удалить тип урока' })
    @ApiParam({ name: 'id', type: Number, description: 'ID типа урока для удаления' })
    @ApiResponse({ status: 200, description: 'Тип урока удален' })
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.lessonTypesService.delete(id);
    }
}
