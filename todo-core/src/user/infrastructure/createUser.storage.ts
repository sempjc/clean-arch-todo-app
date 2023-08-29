import { User } from "../domain/user.domain";

export interface createUserStorage {
  create(user: User): Promise<void>;
}
