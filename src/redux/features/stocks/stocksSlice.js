import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    stocks: [],
    error: ''
};

export const fetchStocks = createAsyncThunk('stocks/fetchStocks', () => axios
    .get('https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=a509fb191f7434273c911ac542b85dc2')
    .then((response) => response.data));