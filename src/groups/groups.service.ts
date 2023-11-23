import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupsService {
    constructor(
        @InjectRepository(Group)
        private groupsRepository: Repository<Group>,
    ) {}

    async findAll(): Promise<Group[]> {
        return await this.groupsRepository.find({ relations: ['department', 'eduType'] });
    }

    async findOne(id: number): Promise<Group> {
        return await this.groupsRepository.findOne({where: {id}, relations: ['department', 'eduType'] });
    }

    async create(group: Group): Promise<Group> {
        return await this.groupsRepository.save(group);
    }

    async update(id: number, updateData: Partial<Group>): Promise<Group> {
        await this.groupsRepository.update(id, updateData);
        return this.groupsRepository.findOne({
            where: {id},
            relations: ['department', 'eduType']
        });
    }

    async delete(id: number): Promise<void> {
        await this.groupsRepository.delete(id);
    }
}
