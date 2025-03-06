import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from '../components/TodoForm';
import '@testing-library/jest-dom/extend-expect';

test('thêm todo mới', () => {
  const mockAddTodo = jest.fn();
  render(<TodoForm onAdd={mockAddTodo} />);

  const input = screen.getByPlaceholderText(/Add new todo.../i);
  const button = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: 'Mới' } });
  fireEvent.click(button);

  expect(mockAddTodo).toHaveBeenCalledWith('Mới');
});

test('kiểm tra đầu vào không được để trống', () => {
  const mockAddTodo = jest.fn();
  render(<TodoForm onAdd={mockAddTodo} />);

  const button = screen.getByText(/Add/i);
  fireEvent.click(button);

  expect(screen.getByText(/Todo không được để trống!/i)).toBeInTheDocument();
});