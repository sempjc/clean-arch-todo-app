import { UpdateUser } from "../domain/updateUser.domain";

export interface updateUserStorage {
  update(id: string, user: UpdateUser): Promise<void>;
}
