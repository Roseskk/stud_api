
import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { Faculty } from './entities/faculty.entity';

@Controller('faculties')
export class FacultiesController {
    constructor(private readonly facultiesService: FacultiesService) {}

    @Get()
    findAll() {
        return this.facultiesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.facultiesService.findOne(id);
    }

    @Post()
    create(@Body() faculty: Faculty) {
        return this.facultiesService.create(faculty);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() faculty: Partial<Faculty>) {
        return this.facultiesService.update(id, faculty);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.facultiesService.delete(id);
    }
}
