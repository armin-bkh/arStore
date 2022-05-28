import { http } from "./httpServces";

interface UserDataType {
  email: string;
  password: string;
}

export function login(user: UserDataType) {
  return http.post("/user/login", user);
}
