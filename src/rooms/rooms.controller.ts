import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {RoomsService} from "./rooms.service";
import {Room} from "./entities/rooms.entity";

@Controller('rooms')
export class RoomsController {
    constructor(private readonly roomService: RoomsService) {}

    @Get()
    findAll() {
        return this.roomService.findAll()
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.roomService.findOne(id)
    }

    @Post()
    create(@Body() room: Room) {
        return this.roomService.create(room);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() room: Partial<Room>) {
        return this.roomService.update(id, room);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.roomService.delete(id);
    }
}
