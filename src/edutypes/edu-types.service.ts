
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EduType } from './entities/edu-type.entity';

@Injectable()
export class EduTypesService {
    constructor(
        @InjectRepository(EduType)
        private eduTypesRepository: Repository<EduType>,
    ) {}

    findAll() {
        return this.eduTypesRepository.find();
    }

    findOne(id: number) {
        return this.eduTypesRepository.findOne({where: {id}});
    }

    create(eduType: EduType) {
        return this.eduTypesRepository.save(eduType);
    }

    async update(id: number, updateData: Partial<EduType>) {
        await this.eduTypesRepository.update(id, updateData);
        return this.eduTypesRepository.findOne({where: {id}});
    }

    delete(id: number) {
        return this.eduTypesRepository.delete(id);
    }
}
