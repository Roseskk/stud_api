import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('rooms')
export class Room {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string
}