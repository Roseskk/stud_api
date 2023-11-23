
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('edutypes')
export class EduType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
}
