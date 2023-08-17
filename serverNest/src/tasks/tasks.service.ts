import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/typeorm/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  async getTasks(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async getTasksByUserId(peopleId: string): Promise<Task[]> {
    return await this.taskRepository.find({ peopleId });
  }

  async addTask(peopleId: string, message: string) {
    const obj = { peopleId, message };
    console.log('obj ', obj);
    const newTask = this.taskRepository.create(obj);
    return await this.taskRepository.save(newTask);
  }

  // async removeTask(id: string) {
  //   console.log('id ', id);
  //   const task = await this.taskRepository.findOne(id);
  //   await this.taskRepository.remove(task);
  //   return task;
  // }

  // async editTask(id: string, name: string) {
  //   await this.taskRepository.update(id, { name });
  //   return this.taskRepository.findOne(id);
  // }
}
