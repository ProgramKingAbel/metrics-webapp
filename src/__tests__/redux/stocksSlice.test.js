import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchStocks } from '../../redux/features/stocks/stocksSlice';
import axios from '../../__mocks__/axios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('axios');

describe('fetchStocks', () => {
  test('dispatches the correct actions when fetching stocks is successful', () => {
    const responseData = { stocks: [] };
    axios.get.mockResolvedValueOnce({ data: responseData });

    const store = mockStore({});

    return store.dispatch(fetchStocks()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions[0]).toEqual(expect.objectContaining({ type: 'stocks/fetchStocks/pending' }));
      expect(dispatchedActions[1]).toEqual(expect.objectContaining({ type: 'stocks/fetchStocks/fulfilled' }));
    });
  });

  test('dispatches the correct actions when fetching stocks is unsuccessful', () => {
    axios.get.mockRejectedValueOnce(new Error('Failed to fetch stocks.'));

    const store = mockStore({});

    return store.dispatch(fetchStocks()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions[0]).toEqual(expect.objectContaining({ type: 'stocks/fetchStocks/pending' }));
      expect(dispatchedActions[1]).toEqual(expect.objectContaining({ type: 'stocks/fetchStocks/rejected' }));
    });
  });
});
