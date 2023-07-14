import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchDetails } from '../redux/features/details/detailsSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('fetchDetails', () => {
  test('dispatches the correct actions when fetching stock details', () => {
    const store = mockStore({});

    const symbol = 'AAPL';

    return store.dispatch(fetchDetails(symbol)).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions[0]).toEqual(expect.objectContaining({ type: 'stock/details/pending' }));
      expect(dispatchedActions[1]).toEqual(expect.objectContaining({ type: 'stock/details/rejected' }));
    });
  });
});
