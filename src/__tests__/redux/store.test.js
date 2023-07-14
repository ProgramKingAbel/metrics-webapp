import { configureStore } from '@reduxjs/toolkit';
import stocksReducer from '../../redux/features/stocks/stocksSlice';
import detailsReducer from '../../redux/features/details/detailsSlice';

describe('Store config', () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                stocks: stocksReducer,
                details: detailsReducer,
            },
        });
    });

    test('Correct Initial state', () => {
        const state = store.getState();
        expect(state).toEqual({
            stocks: stocksReducer(undefined, {}),
            details: detailsReducer(undefined, {}),
        })
    })
})