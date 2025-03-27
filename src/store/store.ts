import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";
import currenciesSlice from "./currenciesSlice";
import modalSlice from "./modalSlice";

export const store = configureStore({
    reducer: { inputSlice, currenciesSlice, modalSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
