import { CoinRowInfo } from "@/react/types";
import loadCoins from "@/scripts/api/loadCoins";
import coinsFilter from "@/scripts/stock/coinsFilter";
import createStock, { StockCoinInfo } from "@/scripts/stock/createStock";
import createWeights from "@/scripts/stock/createWeights";
import {
    PayloadAction,
    createAsyncThunk,
    createSlice,
    current,
} from "@reduxjs/toolkit";

const initialState: {
    coinsList: CoinRowInfo[];
    stockList: StockCoinInfo[];
} = {
    coinsList: [],
    stockList: [],
};

export const fetchCurrencies = createAsyncThunk("cyrrencies/get", async () => {
    const currencies = await loadCoins(30);
    return currencies;
});

const currenciesSlice = createSlice({
    name: "currencies/slice",
    initialState,
    reducers: {
        createStockList(
            state,
            action: PayloadAction<{
                fields: [boolean, boolean, boolean];
                budget: number;
            }>
        ) {
            const filteredCoins = coinsFilter(
                current(state.coinsList),
                action.payload.fields
            );
            const coinsWithWeight = createWeights(filteredCoins);
            state.stockList = createStock(
                coinsWithWeight,
                action.payload.budget
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
            state.coinsList = action.payload;
        });
    },
});

export const { createStockList } = currenciesSlice.actions;
export default currenciesSlice.reducer;
