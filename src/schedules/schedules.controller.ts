import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { SchedulesService } from './schedules.service';
import { Schedule } from './entities/schedule.entity';

@ApiTags('schedules')
@Controller('schedules')
export class SchedulesController {
    constructor(private readonly schedulesService: SchedulesService) {}

    @ApiOperation({ summary: 'Получить все расписания' })
    @ApiResponse({ status: 200, description: 'Список всех расписаний', type: [Schedule] })
    @Get()
    findAll() {
        return this.schedulesService.findAll();
    }

    @ApiOperation({ summary: 'Получить расписание по ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID расписания' })
    @ApiResponse({ status: 200, description: 'Возвращает расписание по ID', type: Schedule })
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.schedulesService.findOne(id);
    }

    @ApiOperation({ summary: 'Создать новое расписание' })
    @ApiBody({ type: Schedule, description: 'Данные для нового расписания' })
    @ApiResponse({ status: 201, description: 'Новое расписание создано', type: Schedule })
    @Post()
    create(@Body() schedule: Schedule) {
        return this.schedulesService.create(schedule);
    }

    @ApiOperation({ summary: 'Обновить расписание' })
    @ApiParam({ name: 'id', type: Number, description: 'ID расписания для обновления' })
    @ApiBody({ type: Schedule, description: 'Новые данные для расписания' })
    @ApiResponse({ status: 200, description: 'Расписание обновлено', type: Schedule })
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() schedule: Partial<Schedule>) {
        return this.schedulesService.update(id, schedule);
    }

    @ApiOperation({ summary: 'Удалить расписание' })
    @ApiParam({ name: 'id', type: Number, description: 'ID расписания для удаления' })
    @ApiResponse({ status: 200, description: 'Расписание удалено' })
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.schedulesService.delete(id);
    }
}
