import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudUsersModule } from './stud_users/stud-users.module'; // Импортируйте StudUsersModule
import { StudUser } from './stud_users/entities/stud-user.entity';
import {Discipline} from "./disciplines/entities/discipline.entity";
import {DisciplinesModule} from "./disciplines/disciplines.module"; // Импортируйте сущность StudUser
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
import * as process from "process";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306, // Убедитесь, что порт указан, если отличается от стандартного
      username: process.env.api_log,
      password: process.env.api_pw,
      database: 'stud',
      entities: [StudUser, Discipline, Room, Teacher, LessonType, Schedule, Lesson], // Добавьте сюда сущность StudUser
      synchronize: false,
    }),
    StudUsersModule, DisciplinesModule, RoomsModule, TeachersModule, LessonTypesModule, SchedulesModule, LessonsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}