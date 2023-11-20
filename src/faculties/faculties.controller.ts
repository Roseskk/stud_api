import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { FacultiesService } from './faculties.service';
import { Faculty } from './entities/faculty.entity';

@ApiTags('faculties')
@Controller('faculties')
export class FacultiesController {
    constructor(private readonly facultiesService: FacultiesService) {}

    @ApiOperation({ summary: 'Получить все факультеты' })
    @ApiResponse({ status: 200, description: 'Список всех факультетов', type: [Faculty] })
    @Get()
    findAll() {
        return this.facultiesService.findAll();
    }

    @ApiOperation({ summary: 'Получить факультет по ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID факультета' })
    @ApiResponse({ status: 200, description: 'Возвращает факультет по ID', type: Faculty })
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.facultiesService.findOne(id);
    }

    @ApiOperation({ summary: 'Создать новый факультет' })
    @ApiBody({ type: Faculty, description: 'Данные для нового факультета' })
    @ApiResponse({ status: 201, description: 'Новый факультет создан', type: Faculty })
    @Post()
    create(@Body() faculty: Faculty) {
        return this.facultiesService.create(faculty);
    }

    @ApiOperation({ summary: 'Обновить факультет' })
    @ApiParam({ name: 'id', type: Number, description: 'ID факультета для обновления' })
    @ApiBody({ type: Faculty, description: 'Новые данные для факультета' })
    @ApiResponse({ status: 200, description: 'Факультет обновлен', type: Faculty })
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() faculty: Partial<Faculty>) {
        return this.facultiesService.update(id, faculty);
    }

    @ApiOperation({ summary: 'Удалить факультет' })
    @ApiParam({ name: 'id', type: Number, description: 'ID факультета для удаления' })
    @ApiResponse({ status: 200, description: 'Факультет удален' })
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.facultiesService.delete(id);
    }
}
