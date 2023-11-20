import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {LessThanOrEqual, MoreThanOrEqual, Repository} from 'typeorm';
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

    findAllInAcademicYear() {
        const currentYear = new Date().getFullYear();
        const startDate = new Date(`${currentYear}-09-01`);
        const endDate = new Date(`${currentYear + 1}-07-10`);

        return this.lessonsRepository.find({
            where: {
                start_datetime: MoreThanOrEqual(startDate),
                end_datetime: LessThanOrEqual(endDate)
            },
            relations: ['discipline', 'teacher', 'teacher2', 'room', 'room2', 'schedule', 'lessonType']
        });
    }

    findByScheduleId(scheduleId: number) {
        return this.lessonsRepository.find({
            where: { schedule: { id: scheduleId } },
            relations: ['discipline', 'teacher', 'teacher2', 'room', 'room2', 'schedule', 'lessonType'],
        });
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
