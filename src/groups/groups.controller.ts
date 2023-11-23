import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { GroupsService } from './groups.service';
import { Group } from './entities/group.entity';

@ApiTags('groups')
@Controller('groups')
export class GroupsController {
    constructor(private readonly groupsService: GroupsService) {}

    @ApiOperation({ summary: 'Получить все группы' })
    @ApiResponse({ status: 200, description: 'Возвращает список всех групп', type: [Group] })
    @Get()
    findAll() {
        return this.groupsService.findAll();
    }

    @ApiOperation({ summary: 'Получить группу по ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID группы' })
    @ApiResponse({ status: 200, description: 'Возвращает группу по ID', type: Group })
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.groupsService.findOne(id);
    }

    @ApiOperation({ summary: 'Создать группу' })
    @ApiBody({ type: Group, description: 'Информация о новой группе' })
    @ApiResponse({ status: 201, description: 'Группа создана', type: Group })
    @Post()
    create(@Body() group: Group) {
        return this.groupsService.create(group);
    }

    @ApiOperation({ summary: 'Обновить группу' })
    @ApiParam({ name: 'id', type: Number, description: 'ID группы для обновления' })
    @ApiBody({ type: Group, description: 'Новые данные для группы' })
    @ApiResponse({ status: 200, description: 'Группа обновлена', type: Group })
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() group: Partial<Group>) {
        return this.groupsService.update(id, group);
    }

    @ApiOperation({ summary: 'Удалить группу' })
    @ApiParam({ name: 'id', type: Number, description: 'ID группы для удаления' })
    @ApiResponse({ status: 200, description: 'Группа удалена' })
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.groupsService.delete(id);
    }
}
