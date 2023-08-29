import { Todo } from "../domain/todo.domain";

export interface creaateTodoItemInfra {
  save(todo: Todo): Promise<void>;
}
