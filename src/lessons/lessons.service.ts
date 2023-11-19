import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './entities/lesson.entity';

@Injectable()
export class LessonsService {
    constructor(
        @InjectRepository(Lesson)
        private lessonsRepository: Repository<Lesson>,
    ) {}

    findAll() {
        return this.lessonsRepository.find({ relations: ['discipline', 'teacher', 'teacher2', 'room', 'room2', 'schedule', 'lessonType'] });
    }

    findOne(id: number) {
        return this.lessonsRepository.findOne({
            where: { id },
            relations: ['discipline', 'teacher', 'teacher2', 'room', 'room2', 'schedule', 'lessonType']
        });
    }


    create(lesson: Lesson) {
        return this.lessonsRepository.save(lesson);
    }

    async update(id: number, updateData: Partial<Lesson>) {
        await this.lessonsRepository.update(id, updateData);
        return this.lessonsRepository.findOne({where: {id}});
    }

    delete(id: number) {
        return this.lessonsRepository.delete(id);
    }
}
