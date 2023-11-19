import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { Schedule } from './entities/schedule.entity';

@Controller('schedules')
export class SchedulesController {
    constructor(private readonly schedulesService: SchedulesService) {}

    @Get()
    findAll() {
        return this.schedulesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.schedulesService.findOne(id);
    }

    @Post()
    create(@Body() schedule: Schedule) {
        return this.schedulesService.create(schedule);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() schedule: Partial<Schedule>) {
        return this.schedulesService.update(id, schedule);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.schedulesService.delete(id);
    }
}
