import * as User from "./domain/user.domain";
import * as UpdateUser from "./domain/updateUser.domain";

import { createUserCase } from "./application/createUser.useCase";
// import { updateUserUseCase } from "./application/updateUser.useCase";
// import { getUserByIdUseCase } from "./application/getUserById.useCase";

// import { createUserStorage } from "./infrastructure/createUser.storage";
// import { getUserByIdStorage } from "./infrastructure/getUserById.storage";
// import { updateUserStorage } from "./infrastructure/updateUserById.storage";
// import { deleteUserByIdStorage } from "./infrastructure/deleteUserById.storage";

export const UserDomain = {
  User,
  UpdateUser,
};

export const UserApplication = {
  createUserCase,
  // updateUserUseCase,
  // getUserByIdUseCase,
};
