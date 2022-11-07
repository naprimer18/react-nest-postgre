import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  async getTasks(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async addTask(name: string) {
    const obj = { name: name };
    const newTask = this.taskRepository.create(obj);
    return await this.taskRepository.save(newTask);
  }

  async removeTask(id: number) {
    console.log('id ', id);
    const task = await this.taskRepository.findOne(id);
    await this.taskRepository.remove(task);
    return task;
  }

  async editTask(id: number, name: string) {
    await this.taskRepository.update({ id }, { id, name });
    return this.taskRepository.findOne(id);
  }
}
