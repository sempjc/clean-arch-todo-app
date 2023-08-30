import { UserInfo } from "../domain/user-info.entity";

export interface ICreateUserRepository {
  createUser(user: UserInfo): Promise<void>;
}
