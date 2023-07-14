import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchDetails } from '../../redux/features/details/detailsSlice';
import axios from '../../__mocks__/axios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('axios');

describe('fetchDetails', () => {
  test('dispatches the correct actions when fetching stock details is fulfilled', () => {
    const store = mockStore({});
    const responseData = { stocks: [] };
    axios.get.mockResolvedValueOnce({ data: responseData });

    const symbol = 'AAPL';

    return store.dispatch(fetchDetails(symbol)).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions[0]).toEqual(expect.objectContaining({ type: 'stock/details/pending' }));
      expect(dispatchedActions[1]).toEqual(expect.objectContaining({ type: 'stock/details/fulfilled' }));
      expect(dispatchedActions[2]).toBeUndefined();
    });
  });

  test('dispatches the correct actions when fetching stock details is rejected', () => {
    const store = mockStore({});
    const error = new Error('Failed to fetch stock details.');
    axios.get.mockRejectedValueOnce(error);

    const symbol = 'AAPL';

    return store.dispatch(fetchDetails(symbol)).then(() => {
      const dispatchedActions = store.getActions();

      expect(dispatchedActions[0]).toEqual(expect.objectContaining({ type: 'stock/details/pending' }));
      expect(dispatchedActions[1]).toEqual(expect.objectContaining({ type: 'stock/details/rejected' }));
      expect(dispatchedActions[2]).toBeUndefined();
    });
  });
});
