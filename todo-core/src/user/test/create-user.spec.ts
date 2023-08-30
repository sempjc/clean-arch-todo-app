import { expect, test } from "vitest";
import { UserInfo, createUserUseCaseImpl } from "../user.index";
import { userRepository } from "./utils/user-repository";

test("should create a user", async () => {
  // Arrange
  const user: UserInfo = {
    id: "1",
    authId: "1",
    email: "user@testusr.com",
    firstName: "Test",
    lastName: "User",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  // Act
  await createUserUseCaseImpl.execute(userRepository, user);
  // Assert
  expect(userRepository.users[0]).toEqual(user);
});

test("should not create a user if missing required fields", () => {
  // Arrange
  const user = {} as UserInfo;
  expect(
    // Act
    createUserUseCaseImpl.execute(userRepository, user)
  )
    // Assert
    .rejects.toThrowError("User is undefined or null");
});
