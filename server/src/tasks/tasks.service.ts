import { Injectable } from '@nestjs/common';
import { Task } from './tasks.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTaskDto, UpdateTaskDto } from './types';
import { UsersService } from '../users/users.service';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task)
    private taskModel: typeof Task,
    private readonly userService: UsersService
  ) {}

  findOne( id: string | number): Promise<Task> {
    return this.taskModel.findOne({
      where: { id }
    })
  }

  findAllByUserId( userId: string | number): Promise<Task[]> {
    return this.taskModel.findAll({
      where: { userId }
    })
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task | { errorMessage: string }> {
    const task = new Task()

    const user = await this.userService.findOne({ where: { id: createTaskDto.userId } })

    if (!user) {
      return { errorMessage: 'User not found' }
    }

    task.name = createTaskDto.name
    task.userId = createTaskDto.userId
    task.description = createTaskDto.description
    task.priority = createTaskDto.priority
    task.deadline = createTaskDto.deadline
    task.completed = createTaskDto.completed

    return task.save()
  }

  async updateTask(updateTaskDto: UpdateTaskDto, id: string | number): Promise<Task> {
    await this.taskModel.update({ ...updateTaskDto }, { where: { id } })

    return await this.taskModel.findOne({ where: { id }})
  }

  async copy(id: string | number): Promise<Task | { errorMessage: string }> {
    console.log(id)
    const task = await this.taskModel.findOne({ where: { id } })
    if (!task) {
      return { errorMessage: 'Task not found' }
    }

    const newTask = new Task()

    newTask.name = task.name
    newTask.userId = task.userId
    newTask.description = task.description
    newTask.priority = task.priority
    newTask.deadline = task.deadline
    newTask.completed = task.completed

    return newTask.save()
  }

  async removeById(id: string | number): Promise<void> {
    const task = await this.taskModel.findOne({where: { id }})

    await task.destroy()
  }

  async removeAllByUserId(userId: string | number): Promise<void> {
    await this.taskModel.destroy({ where: { userId } })
  }
}
