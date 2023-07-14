import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/store';
import Home from '../../Pages/Home';

test('renders Home component correctly', () => {
  const { container } = render(<Provider store={store}><Router><Home /></Router></Provider>);
  expect(container).toMatchSnapshot();
});
