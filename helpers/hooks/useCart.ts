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
import { isLastOne } from "helpers/utilities/isLastOne";

export const useCart = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setCookie(CART_COOKIE, JSON.stringify(cart));
  }, [cart]);

  const handleRemoveCartItem = useCallback(
    (product: CartItem) => {
      dispatch(removeCartItem(product));
      toast(`${product.name} removed from your cart`, { type: "info" });
    },
    [cart]
  );

  const handleIncrementCartItem = useCallback(
    (product: CartItem) => {
      const message = isExist(cart.cart, product._id)
        ? `${product.name}'s quantity incremented`
        : `${product.name} added to your cart`;
      dispatch(incrementCartItem(product));
      toast(message, { type: "success" });
    },
    [cart]
  );

  const handleDecrementCartItem = useCallback(
    (product: CartItem) => {
      const message = isLastOne(cart.cart, product._id)
        ? `${product.name} remove from your cart`
        : `${product.name}'s quantity decremented`;
      dispatch(decrementCartItem(product));
      toast(message, { type: "success" });
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
