import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('teachers')
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    middle_name: string;

    @Column()
    second_name: string;

    @Column()
    user_id: number;
}