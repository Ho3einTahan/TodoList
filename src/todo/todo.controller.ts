import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './schema/todo.schema';

@Controller('todo')
export class TodoController {

    constructor(private readonly todoService: TodoService) { }

    async getAllTodos(): Promise<Todo[]> {
        return await this.todoService.getAllTodos();
    }

    @Get('/:id')
    async getTodoById(@Param("id") id: string): Promise<Todo> {
        return await this.todoService.getTodoById(id);
    }

    @Post("create")
    async createTodo(@Body() body): Promise<Todo> {
        const todo = {
            title: body.title,
            description: body.description,
            done: false
        } as Todo;
        return await this.todoService.createTodo(todo);
    }

    @Put("update/:id")
    async updateTodo(@Param("id") id: string, @Body() body): Promise<Todo> {
        const todo = {
            title: body.title,
            description: body.description,
            done: body.done
        } as Todo;
        return await this.todoService.updateTodo(id, todo);
    }

    @Delete('delete/:id')
    async deleteTodo(@Param("id") id: string) {
        await this.todoService.deleteTodo(id);
        return {message:"task deleted"}
    }

}