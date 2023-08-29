export type Todo = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly isCompleted: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
};
