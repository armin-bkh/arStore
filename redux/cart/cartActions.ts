import {
  DECREMENT_ITEM_CART,
  INCREMENT_ITEM_CART,
  REMOVE_FROM_CART,
  SAVED_CART_DATA,
} from "redux/cart/actionTypes";
import { CartItem, CartStateType } from "redux/cart/cartReducer";

export function incrementCartItem(cartItem: CartItem) {
  return { type: INCREMENT_ITEM_CART, payload: { cartItem } };
}

export function decrementCartItem(cartItem: CartItem) {
  return { type: DECREMENT_ITEM_CART, payload: { cartItem } };
}

export function removeCartItem(cartItem: CartItem) {
  return { type: REMOVE_FROM_CART, payload: { cartItem } };
}

export function savedCartData(cartData: CartStateType) {
  return { type: SAVED_CART_DATA, payload: { cartData } };
}
