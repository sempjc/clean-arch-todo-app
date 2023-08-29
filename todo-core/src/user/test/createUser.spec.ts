import { expect, test } from "vitest";
import { User } from "../domain/user.domain";
import { createUserStorage } from "../infrastructure/createUser.storage";
import { createUserCase } from "../application/createUser.useCase";

const storage = () => {
  const users: User[] = [];
  const userCreatorStorage: createUserStorage = {
    create: async (user: User) => {
      users.push(user);
    },
  };

  return {
    users,
    userCreatorStorage,
  };
};

test("should create a user", async () => {
  // Arrange
  const user: User = {
    id: "1",
    authId: "1",
    email: "user@testusr.com",
    firstName: "Test",
    lastName: "User",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const { users, userCreatorStorage } = storage();

  // Act
  await createUserCase.execute(userCreatorStorage, user);

  // Assert
  expect(users[0]).toEqual(user);
});

test("should not create a user if missing required fields", () => {
  // Arrange
  const user = {} as User;
  const { userCreatorStorage } = storage();

  expect(
    // Act
    createUserCase.execute(userCreatorStorage, user)
  )
    // Assert
    .rejects.toThrowError("User is undefined or null");
});
