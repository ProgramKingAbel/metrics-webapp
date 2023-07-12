import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  stock: {},
  error: '',
};

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_STOCK_DETAIL_URL;
export const fetchDetails = createAsyncThunk('stock/details',
  async (symbol) => axios
    .get(`${BASE_URL}/${symbol}?timeseries=14&apikey=${API_KEY}`)
    .then((response) => response.data));

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      state.stock = action.payload;
    });
  },
});

export default detailsSlice.reducer;
