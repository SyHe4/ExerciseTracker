import { api } from "./session";

export interface User {
  id?: number,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  password: string,
  role: boolean,
  token?: string
}

export function getUsers(): Promise < User[] > {
  return api("users"); 
}

export async function getUserByEmail(email: string): Promise <User | undefined> {
  const users = await getUsers();
  return users.find( x => x.email === email );
}

export function searchUsers(query: string, page: number): Promise<User[]>{
  return api(`users/search?q=${query}&page=${page}`);
}