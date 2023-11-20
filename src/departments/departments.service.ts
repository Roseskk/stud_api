
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentsService {
    constructor(
        @InjectRepository(Department)
        private departmentsRepository: Repository<Department>,
    ) {}

    findAll() {
        return this.departmentsRepository.find({ relations: ['faculty'] });
    }

    findOne(id: number) {
        return this.departmentsRepository.findOne(
            {
                where: {id},
            relations: ['faculty']
            });
    }

    create(department: Department) {
        return this.departmentsRepository.save(department);
    }

    async update(id: number, updateData: Partial<Department>) {
        await this.departmentsRepository.update(id, updateData);
        return this.departmentsRepository.findOne({
            where: {id},
            relations: ['faculty']
        });
    }

    delete(id: number) {
        return this.departmentsRepository.delete(id);
    }
}
