//import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

test('renders welcome text', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('welcome-text')).toBeTruthy();
});
