import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { RoomsService } from './rooms.service';
import { Room } from './entities/rooms.entity';

@ApiTags('rooms')
@Controller('rooms')
export class RoomsController {
    constructor(private readonly roomService: RoomsService) {}

    @ApiOperation({ summary: 'Получить все аудитории' })
    @ApiResponse({ status: 200, description: 'Список всех аудиторий', type: [Room] })
    @Get()
    findAll() {
        return this.roomService.findAll();
    }

    @ApiOperation({ summary: 'Получить аудиторию по ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID аудитории' })
    @ApiResponse({ status: 200, description: 'Возвращает аудиторию по ID', type: Room })
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.roomService.findOne(id);
    }

    @ApiOperation({ summary: 'Создать новую аудиторию' })
    @ApiBody({ type: Room, description: 'Данные для новой аудитории' })
    @ApiResponse({ status: 201, description: 'Новая аудитория создана', type: Room })
    @Post()
    create(@Body() room: Room) {
        return this.roomService.create(room);
    }

    @ApiOperation({ summary: 'Обновить аудиторию' })
    @ApiParam({ name: 'id', type: Number, description: 'ID аудитории для обновления' })
    @ApiBody({ type: Room, description: 'Новые данные для аудитории' })
    @ApiResponse({ status: 200, description: 'Аудитория обновлена', type: Room })
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() room: Partial<Room>) {
        return this.roomService.update(id, room);
    }

    @ApiOperation({ summary: 'Удалить аудиторию' })
    @ApiParam({ name: 'id', type: Number, description: 'ID аудитории для удаления' })
    @ApiResponse({ status: 200, description: 'Аудитория удалена' })
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.roomService.delete(id);
    }
}
