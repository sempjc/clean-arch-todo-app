import { test, expect } from "vitest";
import { getUserByIdStorage } from "../infrastructure/getUserById.storage";
import { User } from "../domain/user.domain";

const storage = () => {
  const users: User[] = [
    {
      id: "1",
      authId: "1",
      email: "user@teset.com",
      firstName: "Test",
      lastName: "User",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const getUserById: getUserByIdStorage = {
    getById: async (id: string) => {
      return users.find((user) => user.id === id) ?? ({} as User);
    },
  };

  return {
    users,
    getUserById,
  };
};

test("should get a user by id", async () => {
  // Arrange
  const { users, getUserById } = storage();

  // Act
  const user = await getUserById.getById("1");

  // Assert
  expect(user).toEqual(users[0]);
});

test("should not get a user by id if id is not found", async () => {
  // Arrange
  const { getUserById } = storage();

  // Act
  const user = await getUserById.getById("2");

  // Assert
  expect(user).toEqual({});
});
