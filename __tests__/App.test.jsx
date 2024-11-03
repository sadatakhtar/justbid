import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders JustBid heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/JustBid/i);
  expect(headingElement).toBeInTheDocument();
});