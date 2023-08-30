import { UserInfo } from "../domain/user-info.entity";
import { IGetUserRepository } from "../infrastructure/get-user.repository.interface";

export interface IGetUserUseCase {
  getUserById(repository: IGetUserRepository, id: string): Promise<UserInfo>;
}
