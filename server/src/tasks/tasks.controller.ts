import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthenticatedGuard } from '../auth/authenticated.guard';
import { CreateTaskDto, UpdateTaskDto } from './types';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @UseGuards(AuthenticatedGuard)
  @Get(':id')
  getAll(@Param('id') userId: string) {
    return this.taskService.findAllByUserId(userId)
  }

  @UseGuards(AuthenticatedGuard)
  @Get('task/:id')
  getOne(@Param('id') id: string) {
    return this.taskService.findOne(id)
  }

  @UseGuards(AuthenticatedGuard)
  @Post('/create')
  create(@Body() createTaskDto: CreateTaskDto ) {
    return this.taskService.create(createTaskDto)
  }

  @UseGuards(AuthenticatedGuard)
  @Post('/update/:id')
  updateTask(
    @Body() updateTaskDto: UpdateTaskDto,
    @Param('id') id: number
  ) {
    return this.taskService.updateTask(updateTaskDto, id)
  }

  @UseGuards(AuthenticatedGuard)
  @Post('/copy')
  copy(
    @Body() { id }: { id: string | number },
  ) {
    return this.taskService.copy(id)
  }

  @UseGuards(AuthenticatedGuard)
  @Delete('/delete')
  deleteOne(
    @Body() { id }: { id: string | number }
  ) {
    return this.taskService.removeById(id)
  }

  @UseGuards(AuthenticatedGuard)
  @Delete('/delete/:userId')
  deleteAllByUser(
    @Param('userId') userId: string
  ) {
    return this.taskService.removeAllByUserId(userId)
  }
}
