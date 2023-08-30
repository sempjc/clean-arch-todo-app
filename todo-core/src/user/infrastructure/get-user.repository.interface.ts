import { UserInfo } from "../domain/user-info.entity";

export interface IGetUserRepository {
  getUser(id: string): Promise<UserInfo | undefined>;
}
