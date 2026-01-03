import { api } from "./api";
import { User, Post } from "../types";

export const userService = {
  async getUsers(): Promise<User[]> {
    return api.get<User[]>("/users");
  },

  async getUser(id: number): Promise<User> {
    return api.get<User>(`/users/${id}`);
  },

  async createUser(userData: Omit<User, "id">): Promise<User> {
    return api.post<User>("/users", userData);
  },

  async updateUser(id: number, userData: Partial<User>): Promise<User> {
    return api.put<User>(`/users/${id}`, userData);
  },

  async deleteUser(id: number): Promise<void> {
    return api.delete(`/users/${id}`);
  },

  async getUserPosts(userId: number): Promise<Post[]> {
    return api.get<Post[]>(`/users/${userId}/posts`);
  },
};
