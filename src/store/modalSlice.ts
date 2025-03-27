import { createSlice, current } from "@reduxjs/toolkit";

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
    },
});

export const { changeModalVisibility } = modalSlice.actions;
export default modalSlice.reducer;
