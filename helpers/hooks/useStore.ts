import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootStateType } from "redux/store";
import { AppDispatch } from "redux/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
