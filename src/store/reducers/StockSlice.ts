import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStock } from '../../models/IStock';
import { fetchStocks } from './ActionCreators';

interface StockState {
    stocks: IStock[];
    isLoading: boolean;
    error: string;
}

const initialState: StockState = {
    stocks: [],
    isLoading: false,
    error: '',
};

export const stockSlice = createSlice({
    name: 'stock',
    initialState,
    reducers: {
        reoderStocks: (state, action: PayloadAction<IStock[]>) => {
            state.stocks = action.payload;
        },
    },
    extraReducers: {
        [fetchStocks.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchStocks.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
            state.stocks = [];
        },
        [fetchStocks.fulfilled.type]: (state, action: PayloadAction<IStock[]>) => {
            state.isLoading = false;
            state.error = '';
            state.stocks = action.payload;
        },
    },
});

export default stockSlice.reducer;
