import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './schema/todo.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {

    constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) { }

    async createTodo(todo: Todo): Promise<Todo> {
        const newTodo = new this.todoModel(todo);
        return newTodo.save();
    }

    async getAllTodos(): Promise<Todo[]> {
        return await this.todoModel.find().exec();
    }

    async getTodoById(id: string): Promise<Todo> {
        return await this.todoModel.findById(id).exec();
    }

    async updateTodo(id: string, todo: Partial<Todo>): Promise<Todo> {
        return await this.todoModel.findByIdAndUpdate(id, todo, { new: true }).exec();
    }

    async deleteTodo(id: string): Promise<Todo> {
        return await this.todoModel.findByIdAndDelete(id).exec();
    }

}