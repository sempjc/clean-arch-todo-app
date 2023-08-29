import { Todo } from "../domain/todo.domain";
import { creaateTodoItemInfra } from "../infrastructure/createTodoItem.infra";

export interface CreateTodoUseCase {
  execute(creator: creaateTodoItemInfra, todo: Todo): Promise<void>;
}

export const CreateTodoUseCaseImpl: CreateTodoUseCase = {
  async execute(creator: creaateTodoItemInfra, todo: Todo): Promise<void> {
    await creator.save(todo);
  },
};
