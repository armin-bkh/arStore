import { isExist } from "helpers/utilities/isExist";
import {
  DECREMENT_ITEM_CART,
  INCREMENT_ITEM_CART,
  REMOVE_FROM_CART,
  SAVED_CART_DATA,
} from "redux/cart/actionTypes";

export const CART_COOKIE = "AR_STORE_CART_COOKIE";

export type CartItem = {
  _id: string;
  discount: number;
  image: string;
  name: string;
  offPrice: number;
  price: number;
  qty: number;
};

export type CartStateType = {
  cart: CartItem[];
  total: number;
};

export type CartActionType = {
  type: string;
  payload: { cartItem: CartItem; cartData: CartStateType };
};

export const cartInitialState: CartStateType = {
  cart: [],
  total: 0,
};

export const cartReducer = (
  state: CartStateType = cartInitialState,
  action: CartActionType
): CartStateType => {
  switch (action.type) {
    case INCREMENT_ITEM_CART: {
      if (isExist(state.cart, action.payload.cartItem._id)) {
        const updatedCart = state.cart.map((item) =>
          item._id === action.payload.cartItem._id
            ? { ...item, qty: item.qty + 1 }
            : item
        );

        return {
          cart: updatedCart,
          total:
            state.total +
            action.payload.cartItem.offPrice * action.payload.cartItem.qty,
        };
      }
      return {
        cart: [...state.cart, action.payload.cartItem],
        total:
          state.total +
          action.payload.cartItem.offPrice * action.payload.cartItem.qty,
      };
    }
    case DECREMENT_ITEM_CART: {
    }
    case REMOVE_FROM_CART: {
      const selectedItem = state.cart.find(
        (item) => item._id === action.payload.cartItem._id
      );
      const updatedCart = state.cart.filter(
        (item) => item._id !== action.payload.cartItem._id
      );

      const total = selectedItem
        ? state.total - selectedItem?.offPrice * selectedItem?.qty
        : state.total;

      return {
        cart: updatedCart,
        total,
      };
    }
    case SAVED_CART_DATA: {
      return action.payload.cartData;
    }
    default: {
      return state;
    }
  }
};
