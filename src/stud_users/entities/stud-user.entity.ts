import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('stud_users')
export class StudUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column({ nullable: true })
    middle_name: string;

    @Column()
    second_name: string;

    @Column()
    birth_date: string;

    @Column()
    user_role_id: number;

    @Column({ nullable: true })
    dekanat_id: number;

    @Column({ nullable: true })
    group_id: number;

    @Column()
    email: string;

    @Column()
    pass: string;

    @Column({ nullable: true })
    last_login: Date;
}
