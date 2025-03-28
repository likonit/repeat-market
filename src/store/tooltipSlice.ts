import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface tooltipStore {
    visible: boolean;
    correction: {
        x: number;
        y: number;
    };
    zIndex: number;
}

const initialState: tooltipStore = {
    visible: false,
    correction: {
        x: 0,
        y: 0,
    },
    zIndex: -3,
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
        setTooltipZindex: function (state, action: PayloadAction<number>) {
            state.zIndex = action.payload;
        },
    },
});

export const { setTooltipVisibility, setCorrection, setTooltipZindex } =
    tooltipSlice.actions;
export default tooltipSlice.reducer;
