import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Department } from "../../departments/entities/department.entity";
import { EduType } from "../../edutypes/entities/edu-type.entity";

@Entity('groups')
export class Group {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    year: number;

    @ManyToOne(() => Department, )
    @JoinColumn({ name: 'department_id' })
    department: Department;

    @ManyToOne(() => EduType, )
    @JoinColumn({ name: 'edutype_id' })
    eduType: EduType;
}
