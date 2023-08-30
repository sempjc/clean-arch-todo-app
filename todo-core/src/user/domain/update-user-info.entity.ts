import { UserInfo } from "./user-info.entity";

export type UpdateUserInfo = Exclude<
  UserInfo,
  "id" | "authId" | "email" | "updatedAt"
>;
