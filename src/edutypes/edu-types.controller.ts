import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { EduTypesService } from './edu-types.service';
import { EduType } from './entities/edu-type.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('edu-types')
@Controller('edu-types')
export class EduTypesController {
    constructor(private readonly eduTypesService: EduTypesService) {}

    @ApiOperation({ summary: 'Получить все типы образования' })
    @ApiResponse({ status: 200, description: 'Возвращает список типов образования', type: [EduType] })
    @Get()
    findAll() {
        return this.eduTypesService.findAll();
    }

    @ApiOperation({ summary: 'Получить тип образования по ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID типа образования' })
    @ApiResponse({ status: 200, description: 'Возвращает тип образования по ID', type: EduType })
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.eduTypesService.findOne(id);
    }

    @ApiOperation({ summary: 'Создать новый тип образования' })
    @ApiBody({ type: EduType, description: 'Информация о новом типе образования' })
    @ApiResponse({ status: 201, description: 'Тип образования создан', type: EduType })
    @Post()
    create(@Body() eduType: EduType) {
        return this.eduTypesService.create(eduType);
    }

    @ApiOperation({ summary: 'Обновить тип образования' })
    @ApiParam({ name: 'id', type: Number, description: 'ID типа образования для обновления' })
    @ApiBody({ type: EduType, description: 'Новые данные для типа образования' })
    @ApiResponse({ status: 200, description: 'Тип образования обновлен', type: EduType })
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() eduType: Partial<EduType>) {
        return this.eduTypesService.update(id, eduType);
    }

    @ApiOperation({ summary: 'Удалить тип образования' })
    @ApiParam({ name: 'id', type: Number, description: 'ID типа образования для удаления' })
    @ApiResponse({ status: 200, description: 'Тип образования удален' })
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.eduTypesService.delete(id);
    }
}
