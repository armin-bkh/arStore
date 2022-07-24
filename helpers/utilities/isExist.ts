import { CartItem } from "redux/cart/cartReducer";

export function isExist(data: CartItem[], id: string) {
  return data.some((item) => item._id === id);
}
