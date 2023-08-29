import { User } from "../domain/user.domain";

export interface getUserByIdStorage {
  getById(id: string): Promise<User>;
}
