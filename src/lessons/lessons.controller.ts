import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { LessonsService } from './lessons.service';
import { Lesson } from './entities/lesson.entity';

@ApiTags('lessons')
@Controller('lessons')
export class LessonsController {
    constructor(private readonly lessonsService: LessonsService) {}

    @ApiOperation({ summary: 'Получить все уроки' })
    @ApiResponse({ status: 200, description: 'Возвращает список всех уроков', type: [Lesson] })
    @Get()
    findAll() {
        return this.lessonsService.findAll();
    }

    @ApiOperation({ summary: 'Получить уроки на сегодняшний день' })
    @ApiResponse({ status: 200, description: 'Возвращает уроки на сегодняшний день', type: [Lesson] })
    @Get('today')
    findAllForToday() {
        return this.lessonsService.findAllForToday();
    }

    @ApiOperation({ summary: 'Получить уроки за академический год' })
    @ApiResponse({ status: 200, description: 'Возвращает уроки за академический год', type: [Lesson] })
    @Get('academic-year')
    findAllInAcademicYear() {
        return this.lessonsService.findAllInAcademicYear();
    }

    @ApiOperation({ summary: 'Получить урок по ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID урока' })
    @ApiResponse({ status: 200, description: 'Возвращает урок по ID', type: Lesson })
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.lessonsService.findOne(id);
    }

    @ApiOperation({ summary: 'Получить уроки по ID расписания' })
    @ApiParam({ name: 'scheduleId', type: Number, description: 'ID расписания' })
    @ApiResponse({ status: 200, description: 'Возвращает уроки по ID расписания', type: [Lesson] })
    @Get('schedule/:scheduleId')
    findByScheduleId(@Param('scheduleId', ParseIntPipe) scheduleId: number) {
        return this.lessonsService.findByScheduleId(scheduleId);
    }

    @ApiOperation({ summary: 'Создать урок' })
    @ApiBody({ type: Lesson, description: 'Информация о новом уроке' })
    @ApiResponse({ status: 201, description: 'Урок создан', type: Lesson })
    @Post()
    create(@Body() lesson: Lesson) {
        return this.lessonsService.create(lesson);
    }

    @ApiOperation({ summary: 'Обновить урок' })
    @ApiParam({ name: 'id', type: Number, description: 'ID урока для обновления' })
    @ApiBody({ type: Lesson, description: 'Новые данные для урока' })
    @ApiResponse({ status: 200, description: 'Урок обновлен', type: Lesson })
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() lesson: Partial<Lesson>) {
        return this.lessonsService.update(id, lesson);
    }

    @ApiOperation({ summary: 'Удалить урок' })
    @ApiParam({ name: 'id', type: Number, description: 'ID урока для удаления' })
    @ApiResponse({ status: 200, description: 'Урок удален' })
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.lessonsService.delete(id);
    }
}
