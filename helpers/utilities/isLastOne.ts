import { CartItem } from "redux/cart/cartReducer";

export function isLastOne(data: CartItem[], id: string) {
  const selectedItem = data.find((item) => item._id === id);

  return selectedItem?.qty === 1;
}
