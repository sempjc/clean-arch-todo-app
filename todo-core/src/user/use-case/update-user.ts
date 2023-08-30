import { UpdateUserInfo } from "../domain/update-user-info.entity";
import { IUpdateUserRepository } from "../infrastructure/update-user.repository.interface";

export interface IUpdateUserUseCase {
  update(
    repository: IUpdateUserRepository,
    id: string,
    user: UpdateUserInfo
  ): Promise<boolean>;
}
