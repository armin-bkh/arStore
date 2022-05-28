import { http } from "./httpServces";

export interface UserLoginDataType {
  email: string;
  password: string;
}

export function login(user: UserLoginDataType) {
  return http.post("/user/login", user);
}
