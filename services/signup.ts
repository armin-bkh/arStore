import { http } from "./httpServces";

interface UserDataType {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export function signup(user: UserDataType) {
  return http.post("/user/register", user);
}
