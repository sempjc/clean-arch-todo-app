export interface IDeleteUserRepository {
  deleteUser(id: string): Promise<boolean>;
}
