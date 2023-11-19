import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('schedules')
export class Schedule {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;

    @Column()
    archive: boolean;
}
