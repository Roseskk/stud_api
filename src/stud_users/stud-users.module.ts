// src/stud-users/stud-users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudUsersService } from './stud-users.service';
import { StudUsersController } from './stud-users.controller';
import { StudUser } from './entities/stud-user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([StudUser])],
    providers: [StudUsersService],
    controllers: [StudUsersController],
})
export class StudUsersModule {}
