import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from '../components/TodoForm';

test('thêm todo mới', () => {
  const mockAddTodo = jest.fn();
  render(<TodoForm onAdd={mockAddTodo} />);

  const input = screen.getByPlaceholderText(/nhập todo/i);
  const button = screen.getByText(/thêm/i);

  fireEvent.change(input, { target: { value: 'Mới' } });
  fireEvent.click(button);

  expect(mockAddTodo).toHaveBeenCalledWith('Mới');
});

test('kiểm tra đầu vào không được để trống', () => {
  const mockAddTodo = jest.fn();
  render(<TodoForm onAdd={mockAddTodo} />);

  const button = screen.getByText(/thêm/i);
  fireEvent.click(button);

  expect(screen.getByText(/todo không được để trống/i)).toBeInTheDocument();
}); 