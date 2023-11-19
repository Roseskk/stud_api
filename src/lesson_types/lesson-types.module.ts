import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonTypesService } from './lesson-types.service';
import { LessonTypesController } from './lesson-types.controller';
import { LessonType } from './entities/lesson-type.entity';

@Module({
    imports: [TypeOrmModule.forFeature([LessonType])],
    controllers: [LessonTypesController],
    providers: [LessonTypesService],
})
export class LessonTypesModule {}
