import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { IStock } from '../../models/IStock';

export const fetchStocks = createAsyncThunk('stock/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get<IStock[]>('https://cloud.iexapis.com/stable/tops', {
            params: {
                token: process.env.REACT_APP_STOCKS_TOKEN,
            },
        });
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue((e as Error).message);
    }
});
