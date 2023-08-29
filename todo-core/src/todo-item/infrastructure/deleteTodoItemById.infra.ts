export interface deleteTodoItemById {
  excute(id: string): Promise<void>;
}
