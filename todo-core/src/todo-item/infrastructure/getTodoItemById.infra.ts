import { Todo } from "../domain/todo.domain";

export interface getTodoItemById {
  excute(id: string): Promise<Todo>;
}
