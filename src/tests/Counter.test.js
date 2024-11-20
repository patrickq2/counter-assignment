import Counter from '../components/Counter';
import { fireEvent, render, screen } from '@testing-library/react';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMess = screen.getByText(/Counter/i);
  expect(counterMess).toBeInTheDocument;
});

test('should render initial count with value of 0', () => {
  const init = screen.getByTestId('count');
  expect(init).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const increment = screen.getByText("+");
  fireEvent.click(increment);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const decrement = screen.getByText("-");
  fireEvent.click(decrement);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('-1');
});
