import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Details from '../../Pages/Details';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Details', () => {
  test('navigate to the home page when the back button is clicked', () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    
    const { getByText } = render(<Details />);

    const backButton = getByText('back');
    fireEvent.click(backButton);

    expect(navigate).toHaveBeenCalledWith('/');
  });
});
