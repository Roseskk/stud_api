
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Faculty } from '../../faculties/entities/faculty.entity';

@Entity('departments')
export class Department {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToOne(() => Faculty)
    @JoinColumn({ name: 'faculty_id' })
    faculty: Faculty;
}
