import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('lesson_types')
export class LessonType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
}
