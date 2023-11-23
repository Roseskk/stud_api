import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudUsersModule } from './stud_users/stud-users.module';
import { StudUser } from './stud_users/entities/stud-user.entity';
import {Discipline} from "./disciplines/entities/discipline.entity";
import {DisciplinesModule} from "./disciplines/disciplines.module";
import { RoomsModule } from './rooms/rooms.module';
import {Room} from "./rooms/entities/rooms.entity";
import { TeachersModule } from './teachers/teachers.module';
import {Teacher} from "./teachers/entities/teacher.entity";
import {LessonTypesModule} from "./lesson_types/lesson-types.module";
import {LessonType} from "./lesson_types/entities/lesson-type.entity";
import {SchedulesModule} from "./schedules/schedules.module";
import {Schedule} from "./schedules/entities/schedule.entity";
import {LessonsModule} from "./lessons/lessons.module";
import {Lesson} from "./lessons/entities/lesson.entity";
import {FacultiesModule} from "./faculties/faculties.module";
import {Faculty} from "./faculties/entities/faculty.entity";
import {DepartmentsModule} from "./departments/departments.module";
import {Department} from "./departments/entities/department.entity";
import {EduType} from "./edutypes/entities/edu-type.entity";
import {EduTypesModule} from "./edutypes/edu-types.module";
import {GroupsModule} from "./groups/groups.module";
import {Group} from "./groups/entities/group.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306, // Убедитесь, что порт указан, если отличается от стандартного
      username: 'root',
      password: 'RoseAmi12',
      database: 'stud',
      entities: [
          StudUser,
          Discipline, Room, Teacher, LessonType,
          Schedule, Lesson, Faculty, Department,
          EduType, Group
      ],
      synchronize: false,
    }),
      StudUsersModule, DisciplinesModule, RoomsModule, TeachersModule,
      LessonTypesModule, SchedulesModule, LessonsModule, FacultiesModule,
      DepartmentsModule, EduTypesModule, GroupsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}