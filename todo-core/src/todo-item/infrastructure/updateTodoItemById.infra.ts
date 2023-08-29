import { Todo } from "../domain/todo.domain";

export interface updateTodoItemById {
  excute(id: string, todo: Todo): Promise<void>;
}
