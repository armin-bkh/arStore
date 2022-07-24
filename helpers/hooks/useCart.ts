import { toast } from "react-toastify";
import { useCallback, useEffect } from "react";
import { setCookie } from "cookies-next";

import { useAppDispatch, useAppSelector } from "helpers/hooks/useStore";
import {
  removeCartItem,
  decrementCartItem,
  incrementCartItem,
} from "redux/cart/cartActions";
import { CART_COOKIE, CartItem } from "redux/cart/cartReducer";
import { isExist } from "helpers/utilities/isExist";

export const useCart = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setCookie(CART_COOKIE, JSON.stringify(cart));
  }, [cart]);

  const handleRemoveCartItem = useCallback(
    (cartItem: CartItem) => {
      dispatch(removeCartItem(cartItem));
      toast(`${cartItem.name} removed from your cart`, { type: "info" });
    },
    [cart]
  );

  const handleIncrementCartItem = useCallback(
    (cartItem: CartItem) => {
      dispatch(incrementCartItem(cartItem));
      const message = isExist(cart.cart, cartItem._id)
        ? "increment"
        : `${cartItem.name} added to your cart`;
      toast(message, { type: "success" });
    },
    [cart]
  );

  const handleDecrementCartItem = useCallback(
    (cartItem: CartItem) => {
      dispatch(decrementCartItem(cartItem));
    },
    [cart]
  );

  return {
    ...cart,
    handleRemoveCartItem,
    handleIncrementCartItem,
    handleDecrementCartItem,
  };
};
