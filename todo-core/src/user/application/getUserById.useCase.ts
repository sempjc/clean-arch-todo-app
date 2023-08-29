import { User } from "../domain/user.domain";

export interface getUserByIdUseCase {
  getUserById(id: string): Promise<User>;
}
