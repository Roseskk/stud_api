
import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { Department } from './entities/department.entity';

@Controller('departments')
export class DepartmentsController {
    constructor(private readonly departmentsService: DepartmentsService) {}

    @Get()
    findAll() {
        return this.departmentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.departmentsService.findOne(id);
    }

    @Post()
    create(@Body() department: Department) {
        return this.departmentsService.create(department);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() department: Partial<Department>) {
        return this.departmentsService.update(id, department);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.departmentsService.delete(id);
    }
}
