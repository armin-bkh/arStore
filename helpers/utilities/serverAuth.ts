import { getCookie } from "cookies-next";
import { IncomingMessage, ServerResponse } from "http";
import { Store } from "redux";
import { savedUserData } from "redux/auth/authActions";
import { AUTH_COOKIE } from "redux/auth/authReducer";

export function serverAuth(
  store: Store,
  req: IncomingMessage,
  res: ServerResponse
) {
  const data = getCookie(AUTH_COOKIE, { req, res });
  if (data) {
    const parsedData = JSON.parse(data as string);
    store.dispatch(savedUserData({ auth: parsedData }));
  }
}
