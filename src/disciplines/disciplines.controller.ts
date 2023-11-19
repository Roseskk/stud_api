import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { DisciplinesService } from './disciplines.service';
import { Discipline } from './entities/discipline.entity';

@Controller('disciplines')
export class DisciplinesController {
    constructor(private readonly disciplinesService: DisciplinesService) {}

    @Get()
    findAll() {
        return this.disciplinesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.disciplinesService.findOne(id);
    }

    @Post()
    create(@Body() discipline: Discipline) {
        return this.disciplinesService.create(discipline);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() discipline: Partial<Discipline>) {
        return this.disciplinesService.update(id, discipline);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.disciplinesService.delete(id);
    }
}
