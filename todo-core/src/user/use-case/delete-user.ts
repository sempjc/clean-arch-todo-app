import { IDeleteUserRepository } from "../infrastructure/delete-user.repository.interface";

export interface IDeleteUserUseCase {
  execute(repository: IDeleteUserRepository, id: string): Promise<void>;
}

export const deleteUserUseCaseImpl: IDeleteUserUseCase = {
  execute: async (deleter, id) => {
    await deleter.deleteUser(id);
    console.log(`User ${id} deleted`);
  },
};
