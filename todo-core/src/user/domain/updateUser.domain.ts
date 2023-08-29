import { User } from "./user.domain";

export type UpdateUser = Exclude<User, "id" | "authId" | "email" | "updatedAt">;
