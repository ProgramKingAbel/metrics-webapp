import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    stocks: [],
    error: ''
};

export const fetchStocks = createAsyncThunk('stocks/fetchStocks', () => axios
    .get(process.env.REACT_APP_STOCKS_URL)
    .then((response) => response.data));

const stocksSlice = createSlice({
    name: stock,
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchStocks.fulfilled, (state, action) => {
            state.stocks = action.payload;
            state.error = '';
        })
    }
})

export default stocksSlice.reducer;