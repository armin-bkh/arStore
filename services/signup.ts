import { http } from "./httpServces";

export interface UserSignupDataType {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export function signup(user: UserSignupDataType) {
  const header = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return http.post("/user/register", user, header);
}
