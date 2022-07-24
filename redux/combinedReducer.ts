import { combineReducers } from "redux";
import { cartReducer } from "redux/cart/cartReducer";
import { userReducer } from "redux/auth/authReducer";

export const combinedReducer = combineReducers({
  auth: userReducer,
  cart: cartReducer,
});
