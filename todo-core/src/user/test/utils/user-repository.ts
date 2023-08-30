import {
  UserInfo,
  UpdateUserInfo,
  ICreateUserRepository,
  IDeleteUserRepository,
  IGetUserRepository,
  IUpdateUserRepository,
} from "../../user.index";

export interface IUserRepository
  extends ICreateUserRepository,
    IDeleteUserRepository,
    IGetUserRepository,
    IUpdateUserRepository {
  users: UserInfo[];
}

export const userRepository: IUserRepository = {
  users: new Array<UserInfo>(),

  async createUser(user: UserInfo): Promise<void> {
    this.users.push(user);
    console.log(`User ${user.id} created`);
  },

  async getUser(id: string): Promise<UserInfo | undefined> {
    const user = this.users.find((user) => user.id === id);
    user
      ? console.log(`User ${id} retrieved`)
      : console.log(`User ${id} not found`);
    return user;
  },

  async updateUser(id: string, user: UpdateUserInfo): Promise<boolean> {
    const index = this.users.findIndex((user) => user.id === id);
    if (index >= 0) {
      this.users[index] = { ...this.users[index], ...user };
      console.log(`User ${id} updated`);
      return true;
    } else {
      console.log(`User ${id} not found`);
      return false;
    }
  },

  async deleteUser(id: string): Promise<boolean> {
    const index = this.users.findIndex((user) => user.id === id);
    if (index >= 0) {
      this.users.splice(index, 1);
      console.log(`User ${id} deleted`);
      return true;
    } else {
      console.log(`User ${id} not found`);
      return false;
    }
  },
};
