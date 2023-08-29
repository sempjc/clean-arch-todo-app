export interface deleteUserByIdStorage {
  delete(id: string): Promise<void>;
}
