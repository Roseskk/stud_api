import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';

import {TeachersService} from "./teachers.service";
import {Teacher} from "./entities/teacher.entity";

@Controller('teachers')
export class TeachersController {
    constructor(private readonly teacherService: TeachersService) {}

    @Get()
    findAll() {
        return this.teacherService.findAll()
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.teacherService.findOne(id)
    }

    @Post()
    create(@Body() teacher: Teacher) {
        return this.teacherService.create(teacher);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() room: Partial<Teacher>) {
        return this.teacherService.update(id, room);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.teacherService.delete(id);
    }
}
