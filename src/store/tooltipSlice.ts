import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface tooltipStore {
    visible: boolean;
    correction: {
        x: number;
        y: number;
    };
}

const initialState: tooltipStore = {
    visible: false,
    correction: {
        x: 0,
        y: 0,
    },
};

const tooltipSlice = createSlice({
    name: "tooltip/slice",
    initialState,
    reducers: {
        setTooltipVisibility: function (state, action: PayloadAction<boolean>) {
            state.visible = action.payload;
        },
        setCorrection: function (
            state,
            action: PayloadAction<{ x: number; y: number }>
        ) {
            state.correction = action.payload;
        },
    },
});

export const { setTooltipVisibility, setCorrection } = tooltipSlice.actions;
export default tooltipSlice.reducer;
