import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";
import currenciesSlice from "./currenciesSlice";
import modalSlice from "./modalSlice";
import tooltipSlice from "./tooltipSlice";

export const store = configureStore({
    reducer: { inputSlice, currenciesSlice, modalSlice, tooltipSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
