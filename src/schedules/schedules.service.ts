import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schedule } from './entities/schedule.entity';

@Injectable()
export class SchedulesService {
    constructor(
        @InjectRepository(Schedule)
        private scheduleRepository: Repository<Schedule>,
    ) {}

    findAll() {
        return this.scheduleRepository.find();
    }

    findOne(id: number) {
        return this.scheduleRepository.findOne({ where: { id } });
    }

    create(schedule: Schedule) {
        return this.scheduleRepository.save(schedule);
    }

    async update(id: number, updateData: Partial<Schedule>) {
        await this.scheduleRepository.update(id, updateData);
        return this.scheduleRepository.findOne({ where: { id } });
    }

    delete(id: number) {
        return this.scheduleRepository.delete(id);
    }
}
