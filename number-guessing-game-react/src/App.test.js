import { render, screen } from '@testing-library/react';
import App from './App';

test('renders game title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Number Guessing Game/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders game instructions', () => {
  render(<App />);
  const instructionElement = screen.getByText(/Guess the number between 1 and 100/i);
  expect(instructionElement).toBeInTheDocument();
});

test('renders input field', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter your guess/i);
  expect(inputElement).toBeInTheDocument();
});

test('renders guess button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Guess!/i);
  expect(buttonElement).toBeInTheDocument();
});
