import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faculty } from './entities/faculty.entity';

@Injectable()
export class FacultiesService {
    constructor(
        @InjectRepository(Faculty)
        private facultiesRepository: Repository<Faculty>,
    ) {}

    findAll() {
        return this.facultiesRepository.find();
    }

    findOne(id: number) {
        return this.facultiesRepository.findOne({where:{id}});
    }

    create(faculty: Faculty) {
        return this.facultiesRepository.save(faculty);
    }

    async update(id: number, updateData: Partial<Faculty>) {
        await this.facultiesRepository.update(id, updateData);
        return this.facultiesRepository.findOne({where: {id}});
    }

    delete(id: number) {
        return this.facultiesRepository.delete(id);
    }
}
