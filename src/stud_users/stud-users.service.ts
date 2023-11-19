import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudUser } from './entities/stud-user.entity';

@Injectable()
export class StudUsersService {
    constructor(
        @InjectRepository(StudUser)
        private readonly studUserRepository: Repository<StudUser>,
    ) {}

    async findAll(): Promise<StudUser[]> {
        return this.studUserRepository.find();
    }

    async findOne(id: number): Promise<StudUser> {
        const user = await this.studUserRepository.findOne({ where: { id } });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found.`);
        }
        return user;
    }

    async create(studUser: StudUser): Promise<StudUser> {
        const newUser = this.studUserRepository.create(studUser);
        await this.studUserRepository.save(newUser);
        return newUser;
    }

    async update(id: number, updateData: Partial<StudUser>): Promise<StudUser> {
        const user = await this.findOne(id);
        Object.assign(user, updateData);
        return this.studUserRepository.save(user);
    }

    async delete(id: number): Promise<void> {
        const result = await this.studUserRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`User with ID ${id} not found.`);
        }
    }
}
