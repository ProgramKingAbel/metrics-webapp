import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/store';
import StockScreener from '../../components/StockScreener';

test('renders Details component correctly', () => {
  const { container } = render(<Provider store={store}><Router><StockScreener /></Router></Provider>);
  expect(container).toMatchSnapshot();
});
