import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { Lesson } from './entities/lesson.entity';

@Controller('lessons')
export class LessonsController {
    constructor(private readonly lessonsService: LessonsService) {}

    @Get()
    findAll() {
        return this.lessonsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.lessonsService.findOne(id);
    }

    @Post()
    create(@Body() lesson: Lesson) {
        return this.lessonsService.create(lesson);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() lesson: Partial<Lesson>) {
        return this.lessonsService.update(id, lesson);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.lessonsService.delete(id);
    }
}
