
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EduTypesService } from './edu-types.service';
import { EduTypesController } from './edu-types.controller';
import { EduType } from './entities/edu-type.entity';

@Module({
    imports: [TypeOrmModule.forFeature([EduType])],
    providers: [EduTypesService],
    controllers: [EduTypesController],
})
export class EduTypesModule {}
