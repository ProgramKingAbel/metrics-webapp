import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/store';
import CandleDetails from '../../components/CandleDetails';

test('renders Details component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <Router><CandleDetails /></Router>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
