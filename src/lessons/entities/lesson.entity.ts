import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Discipline } from '../../disciplines/entities/discipline.entity';
import { Teacher } from '../../teachers/entities/teacher.entity';
import { Schedule } from '../../schedules/entities/schedule.entity';
import { Room } from "../../rooms/entities/rooms.entity";
import { LessonType } from "../../lesson_types/entities/lesson-type.entity";

@Entity('lessons')
export class Lesson {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Discipline)
    @JoinColumn({ name: 'discipline_id' })
    discipline: Discipline;

    @ManyToOne(() => Teacher)
    @JoinColumn({ name: 'teacher_id' })
    teacher: Teacher;

    @ManyToOne(() => Teacher)
    @JoinColumn({ name: 'teacher2_id' })
    teacher2: Teacher;

    @ManyToOne(() => Room)
    @JoinColumn({ name: 'room_id' })
    room: Room;

    @ManyToOne(() => Room)
    @JoinColumn({ name: 'room2_id' })
    room2: Room;

    @Column({ type: 'varchar' })
    link: string;

    @Column({ type: 'varchar' })
    link2: string;

    @Column({ type: 'datetime' })
    start_datetime: Date;

    @Column({ type: 'datetime' })
    end_datetime: Date;

    @ManyToOne(() => Schedule)
    @JoinColumn({ name: 'schedule_id' })
    schedule: Schedule;

    @ManyToOne(() => LessonType)
    @JoinColumn({ name: 'lesson_type_id' })
    lessonType: LessonType;

    @Column({ type: 'varchar' })
    theme: string;
}
