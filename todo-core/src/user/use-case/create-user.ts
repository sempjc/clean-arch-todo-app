import { UserInfo } from "../domain/user-info.entity";
import { ICreateUserRepository } from "../infrastructure/create-user.repository.interface";

export interface ICreateUserUseCase {
  execute(repository: ICreateUserRepository, user: UserInfo): Promise<void>;
}

export const createUserUseCaseImpl: ICreateUserUseCase = {
  execute: async (repository, user) => {
    if (
      user.firstName === undefined ||
      user.firstName === null ||
      user.lastName === undefined ||
      user.lastName === null ||
      user.email === undefined ||
      user.email === null
    ) {
      // TODO create error types specifics for each error
      // Error for missing required fields
      throw new Error("User is undefined or null");
    }

    await repository.createUser(user);
    console.log(`User ${user.id} created`);
  },
};
