import { isExist } from "helpers/utilities/isExist";
import { isLastOne } from "helpers/utilities/isLastOne";
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
  payload: { product: CartItem; cartData: CartStateType };
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
      if (isExist(state.cart, action.payload.product._id)) {
        const updatedCart = state.cart.map((item) =>
          item._id === action.payload.product._id
            ? { ...item, qty: item.qty + 1 }
            : item
        );

        return {
          cart: updatedCart,
          total: state.total + action.payload.product.offPrice,
        };
      }
      return {
        cart: [...state.cart, action.payload.product],
        total:
          state.total +
          action.payload.product.offPrice * action.payload.product.qty,
      };
    }
    case DECREMENT_ITEM_CART: {
      if (isLastOne(state.cart, action.payload.product._id)) {
        const updatedCart = state.cart.filter(
          (item) => item._id !== action.payload.product._id
        );
        return {
          cart: updatedCart,
          total: state.total - action.payload.product.offPrice,
        };
      }
      const updatedCart = state.cart.map((item) =>
        item._id === action.payload.product._id
          ? { ...item, qty: item.qty - 1 }
          : item
      );

      return {
        cart: updatedCart,
        total: state.total - action.payload.product.offPrice,
      };
    }
    case REMOVE_FROM_CART: {
      const selectedItem = state.cart.find(
        (item) => item._id === action.payload.product._id
      );
      const updatedCart = state.cart.filter(
        (item) => item._id !== action.payload.product._id
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
