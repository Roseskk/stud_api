
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('faculties')
export class Faculty {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
}
