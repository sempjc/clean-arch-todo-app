import { UpdateUser } from "../domain/updateUser.domain";
import { User } from "../domain/user.domain";

export interface updateUserUseCase {
  update(user: UpdateUser): Promise<boolean>;
}
