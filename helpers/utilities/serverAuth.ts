import { getCookie } from "cookies-next";
import { IncomingMessage, ServerResponse } from "http";
import { Store } from "redux";
import { savedUserData } from "redux/auth/authActions";
import { AUTH_COOKIE } from "redux/auth/authReducer";
import { savedCartData } from "redux/cart/cartActions";
import { CART_COOKIE } from "redux/cart/cartReducer";

export function serverAuth(
  store: Store,
  req: IncomingMessage,
  res: ServerResponse
) {
  const authData = getCookie(AUTH_COOKIE, { req, res });
  const cartData = getCookie(CART_COOKIE, { req, res });
  const { auth } = store.getState();
  if (cartData) {
    const parsedData = JSON.parse(cartData as string);
    store.dispatch(savedCartData(parsedData));
  }
  if (!auth.user && authData) {
    const parsedData = JSON.parse(authData as string);
    store.dispatch(savedUserData({ auth: parsedData }));
  }
}
