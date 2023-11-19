import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisciplinesService } from './disciplines.service';
import { DisciplinesController } from './disciplines.controller';
import { Discipline } from './entities/discipline.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Discipline])],
    controllers: [DisciplinesController],
    providers: [DisciplinesService],
})
export class DisciplinesModule {}
