import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

interface modalStore {
    visible: boolean;
}

const initialState: modalStore = {
    visible: false,
};

const modalSlice = createSlice({
    name: "modal/slice",
    initialState,
    reducers: {
        changeModalVisibility: function (state) {
            state.visible = !current(state).visible;
        },
        setModalVisibility: function (state, action: PayloadAction<boolean>) {
            state.visible = action.payload;
        },
    },
});

export const { changeModalVisibility, setModalVisibility } = modalSlice.actions;
export default modalSlice.reducer;
