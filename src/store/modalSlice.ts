import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

interface modalStore {
    visible: boolean;
    errorVisible: boolean;
    errorMessage: string;
}

const initialState: modalStore = {
    visible: false,
    errorVisible: false,
    errorMessage: "",
};

const modalSlice = createSlice({
    name: "modal/slice",
    initialState,
    reducers: {
        setModalVisibility: function (state, action: PayloadAction<boolean>) {
            state.visible = action.payload;
        },
        setErrorVisibility: function (state, action: PayloadAction<boolean>) {
            state.errorVisible = action.payload;
        },
        setErrorText: function (state, action: PayloadAction<string>) {
            state.errorMessage = action.payload;
        },
    },
});

export const { setModalVisibility, setErrorVisibility, setErrorText } =
    modalSlice.actions;
export default modalSlice.reducer;
