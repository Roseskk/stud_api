import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Discipline } from './entities/discipline.entity';

@Injectable()
export class DisciplinesService {
    constructor(
        @InjectRepository(Discipline)
        private disciplinesRepository: Repository<Discipline>,
    ) {}

    findAll() {
        return this.disciplinesRepository.find();
    }

    findOne(id: number) {
        return this.disciplinesRepository.findOne({ where: { id } });
    }

    create(discipline: Discipline) {
        return this.disciplinesRepository.save(discipline);
    }

    async update(id: number, updateData: Partial<Discipline>) {
        await this.disciplinesRepository.update(id, updateData);
        return this.disciplinesRepository.findOne({ where: { id } });
    }

    delete(id: number) {
        return this.disciplinesRepository.delete(id);
    }
}
