import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface inputStore {
    fields: [boolean, boolean, boolean];
    input: number;
}

const initialState: inputStore = {
    fields: [false, false, true],
    input: 0,
};

const inputSlice = createSlice({
    name: "input/slice",
    initialState,
    reducers: {
        changeInput: function (state, action: PayloadAction<string>) {
            state.input = +action.payload;
        },
        changeFieldsValue: function (
            state,
            action: PayloadAction<{ index: 0 | 1 | 2; value: boolean }>
        ) {
            state.fields[action.payload.index] = action.payload.value;
        },
    },
});

export const { changeInput, changeFieldsValue } = inputSlice.actions;
export default inputSlice.reducer;
