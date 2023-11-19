import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Teacher} from "./entities/teacher.entity";
import {Repository} from "typeorm";

@Injectable()
export class TeachersService {
    constructor(
        @InjectRepository(Teacher)
        private teacherRepository: Repository<Teacher>
    ) {}

    findAll() {
        return this.teacherRepository.find()
    }

    findOne(id: number) {
        return this.teacherRepository.findOne({where: {id}})
    }

    create(teacher: Teacher) {
        return this.teacherRepository.create()
    }

    async update(id: number, updateData: Partial<Teacher>) {
        await this.teacherRepository.update(id, updateData)
        return this.teacherRepository.findOne({ where: {id}})
    }

    delete(id: number) {
        return this.teacherRepository.delete(id)
    }
}
