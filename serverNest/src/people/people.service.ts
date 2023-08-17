import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksService } from 'src/tasks/tasks.service';
import { People, Task } from 'src/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PeopleService {
  constructor(
    private readonly taskSercice: TasksService,
    @InjectRepository(People) private PeoplesRepository: Repository<People>,
  ) {}

  async getPeoples(): Promise<People[]> {
    return await this.PeoplesRepository.find();
  }
}
