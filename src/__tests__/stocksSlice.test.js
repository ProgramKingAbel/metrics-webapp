import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchStocks } from '../redux/features/stocks/stocksSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchStocks', () => {
    test('dispatches the correct actions when fetching stocks', () => {
   
      const store = mockStore({});
  
      return store.dispatch(fetchStocks()).then(() => {
        const dispatchedActions = store.getActions();
        
          expect(dispatchedActions.length).toBe(2);
          expect(dispatchedActions[0]).toEqual(expect.objectContaining({ type: 'stocks/fetchStocks/pending' }));
          expect(dispatchedActions[1]).toEqual(expect.objectContaining({ type: 'stocks/fetchStocks/rejected' }));
      });
    });
  });