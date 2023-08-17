import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PeopleService } from './people.service';
import { People, Task } from 'src/typeorm';
import { TasksService } from 'src/tasks/tasks.service';
import { ConfigService } from '@nestjs/config';

@Resolver(() => People)
export class PeopleResolver {
  constructor(
    private readonly peopleService: PeopleService,
    private readonly taskSercice: TasksService,
    private readonly configService: ConfigService,
  ) {
    console.log('11', this.configService.get('DB_PORT'));
  }

  @Query(() => [People])
  getPeople(): Promise<People[]> {
    return this.peopleService.getPeoples();
  }

  @ResolveField('tasks', () => [Task])
  async tasks(@Parent() people: People) {
    const { id } = people;
    return this.taskSercice.getTasksByUserId(id);
  }
}
