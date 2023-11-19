import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Room} from "./entities/rooms.entity";
import {Repository} from "typeorm";
import {Discipline} from "../disciplines/entities/discipline.entity";

@Injectable()
export class RoomsService {
    constructor(
        @InjectRepository(Room)
        private roomsRepository: Repository<Room>
    ) {}

    findAll() {
        return this.roomsRepository.find();
    }

    findOne(id: number) {
        return this.roomsRepository.findOne({ where: { id } });
    }

    create(room: Room) {
        return this.roomsRepository.save(room);
    }

    async update(id: number, updateData: Partial<Room>) {
        await this.roomsRepository.update(id, updateData);
        return this.roomsRepository.findOne({ where: { id } });
    }

    delete(id: number) {
        return this.roomsRepository.delete(id);
    }
}
