import { Controller, Get } from "@nestjs/common";

@Controller('tasks')
export class TasksController {
  @Get()
  helloWorld(): string {
    return "hello world";
  }
}
