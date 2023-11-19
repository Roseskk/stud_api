import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('disciplines')
export class Discipline {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
}
