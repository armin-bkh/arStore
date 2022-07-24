import {
  DECREMENT_ITEM_CART,
  INCREMENT_ITEM_CART,
  REMOVE_FROM_CART,
  SAVED_CART_DATA,
} from "redux/cart/actionTypes";
import { CartItem, CartStateType } from "redux/cart/cartReducer";

export function incrementCartItem(product: CartItem) {
  return { type: INCREMENT_ITEM_CART, payload: { product } };
}

export function decrementCartItem(product: CartItem) {
  return { type: DECREMENT_ITEM_CART, payload: { product } };
}

export function removeCartItem(product: CartItem) {
  return { type: REMOVE_FROM_CART, payload: { product } };
}

export function savedCartData(cartData: CartStateType) {
  return { type: SAVED_CART_DATA, payload: { cartData } };
}
