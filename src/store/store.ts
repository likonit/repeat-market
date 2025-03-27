import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";
import currenciesSlice from "./currenciesSlice";

export const store = configureStore({
    reducer: { inputSlice, currenciesSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
