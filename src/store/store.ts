import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux"
import person from "./features/personSlice";


export const store = configureStore({
   reducer: {
      person,
   }
})

export const useAppDispatch: ()=> typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState >> = useSelector