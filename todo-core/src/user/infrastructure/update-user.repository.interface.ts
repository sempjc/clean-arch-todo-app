import { UpdateUserInfo } from "../domain/update-user-info.entity";

export interface IUpdateUserRepository {
  updateUser(id: string, user: UpdateUserInfo): Promise<boolean>;
}
