import { User } from "../domain/user.domain";
import { createUserStorage } from "../infrastructure/createUser.storage";

export interface ICreateUserUseCase {
  execute(creator: createUserStorage, user: User): Promise<void>;
}

export const createUserCase: ICreateUserUseCase = {
  execute: async (creator, user) => {
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

    await creator.create(user);
    console.log(`User ${user.id} created`);
  },
};
