import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { DepartmentsService } from './departments.service';
import { Department } from './entities/department.entity';

@ApiTags('departments')
@Controller('departments')
export class DepartmentsController {
    constructor(private readonly departmentsService: DepartmentsService) {}

    @ApiOperation({ summary: 'Получить все кафедры' })
    @ApiResponse({ status: 200, description: 'Список всех кафедр', type: [Department] })
    @Get()
    findAll() {
        return this.departmentsService.findAll();
    }

    @ApiOperation({ summary: 'Получить кафедру по ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID кафедры' })
    @ApiResponse({ status: 200, description: 'Возвращает кафедру по ID', type: Department })
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.departmentsService.findOne(id);
    }

    @ApiOperation({ summary: 'Создать новую кафедру' })
    @ApiBody({ type: Department, description: 'Данные для новой кафедры' })
    @ApiResponse({ status: 201, description: 'Новая кафедра создана', type: Department })
    @Post()
    create(@Body() department: Department) {
        return this.departmentsService.create(department);
    }

    @ApiOperation({ summary: 'Обновить кафедру' })
    @ApiParam({ name: 'id', type: Number, description: 'ID кафедры для обновления' })
    @ApiBody({ type: Department, description: 'Новые данные для кафедры' })
    @ApiResponse({ status: 200, description: 'Кафедра обновлена', type: Department })
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() department: Partial<Department>) {
        return this.departmentsService.update(id, department);
    }

    @ApiOperation({ summary: 'Удалить кафедру' })
    @ApiParam({ name: 'id', type: Number, description: 'ID кафедры для удаления' })
    @ApiResponse({ status: 200, description: 'Кафедра удалена' })
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.departmentsService.delete(id);
    }
}
