import { Controller, Get, Post, Delete, Put, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/getAllTasks')
  getAll() {
    return this.tasksService.getTasks();
  }

  @Post('addTask')
  addTask(@Body() body) {
    return this.tasksService.addTask(body);
  }

  @Delete('deleteTask')
  deleteTask(@Body() body) {
    return this.tasksService.removeTask(body);
  }

  @Put('editTask')
  editTask(@Body() body) {
    return this.tasksService.editTask(body.id, body);
  }
}
