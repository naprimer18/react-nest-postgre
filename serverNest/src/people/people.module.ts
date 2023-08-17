import { Module } from '@nestjs/common';
// import { PeopleController } from './People.controller';
import { PeopleService } from './people.service';
import { PeopleResolver } from './people.resolver';
import { TasksModule } from 'src/tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from 'src/typeorm';

@Module({
  imports: [TasksModule, TypeOrmModule.forFeature([People])],
  controllers: [],
  providers: [PeopleService, PeopleResolver],
  exports: [PeopleService],
})
export class PeopleModule {}
