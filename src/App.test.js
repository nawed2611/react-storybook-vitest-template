import { render, screen } from '@testing-library/react';
import App from './App';

test('renders button with name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Submit/i);
  expect(linkElement).toBeInTheDocument();
});
