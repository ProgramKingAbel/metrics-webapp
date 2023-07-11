import { configureStore } from '@reduxjs/toolkit';
import stocksReducer from './features/stocks/stocksSlice';
import detailsReducer from './features/details/detailsSlice';

const store = configureStore({
  reducer: {
    stocks: stocksReducer,
    details: detailsReducer,
  },
});

export default store;
