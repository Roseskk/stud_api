import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { LessonTypesService } from './lesson-types.service';
import { LessonType } from './entities/lesson-type.entity';

@Controller('lesson-types')
export class LessonTypesController {
    constructor(private readonly lessonTypesService: LessonTypesService) {}

    @Get()
    findAll() {
        return this.lessonTypesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.lessonTypesService.findOne(id);
    }

    @Post()
    create(@Body() lessonType: LessonType) {
        return this.lessonTypesService.create(lessonType);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() lessonType: Partial<LessonType>) {
        return this.lessonTypesService.update(id, lessonType);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.lessonTypesService.delete(id);
    }
}
