import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LessonType } from './entities/lesson-type.entity';

@Injectable()
export class LessonTypesService {
    constructor(
        @InjectRepository(LessonType)
        private lessonTypeRepository: Repository<LessonType>,
    ) {}

    findAll() {
        return this.lessonTypeRepository.find();
    }

    findOne(id: number) {
        return this.lessonTypeRepository.findOne({ where: { id } });
    }

    create(lessonType: LessonType) {
        return this.lessonTypeRepository.save(lessonType);
    }

    async update(id: number, updateData: Partial<LessonType>) {
        await this.lessonTypeRepository.update(id, updateData);
        return this.lessonTypeRepository.findOne({ where: { id } });
    }

    delete(id: number) {
        return this.lessonTypeRepository.delete(id);
    }
}
