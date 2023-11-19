import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { StudUsersService } from './stud-users.service';
import { StudUser } from './entities/stud-user.entity';

@Controller('stud-users')
export class StudUsersController {
    constructor(private readonly studUsersService: StudUsersService) {}

    @Get()
    findAll() {
        return this.studUsersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.studUsersService.findOne(id);
    }

    @Post()
    create(@Body() studUser: StudUser) {
        return this.studUsersService.create(studUser);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() studUser: Partial<StudUser>) {
        return this.studUsersService.update(id, studUser);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.studUsersService.delete(id);
    }
}
