import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../components/TodoItem';

test('chỉnh sửa todo', () => {
  const todo = { id: 1, text: 'Mới', completed: false };
  const mockUpdateTodo = jest.fn();
  render(<TodoItem todo={todo} onUpdateTodo={mockUpdateTodo} />);

  const editInput = screen.getByPlaceholderText(/chỉnh sửa todo/i);
  fireEvent.change(editInput, { target: { value: 'Đã chỉnh sửa' } });
  const saveButton = screen.getByText(/lưu/i);
  fireEvent.click(saveButton);

  expect(mockUpdateTodo).toHaveBeenCalledWith(1, 'Đã chỉnh sửa');
});

test('đánh dấu todo là hoàn thành', () => {
  const todo = { id: 1, text: 'Mới', completed: false };
  const mockToggleComplete = jest.fn();
  render(<TodoItem todo={todo} onToggleComplete={mockToggleComplete} />);

  const button = screen.getByTestId('complete-button');
  fireEvent.click(button);

  expect(mockToggleComplete).toHaveBeenCalledWith(1);
});

test('xóa todo', () => {
  const todo = { id: 1, text: 'Mới', completed: false };
  const mockDeleteTodo = jest.fn();
  render(<TodoItem todo={todo} onDeleteTodo={mockDeleteTodo} />);

  const deleteButton = screen.getByTestId('delete-button');
  fireEvent.click(deleteButton);

  expect(mockDeleteTodo).toHaveBeenCalledWith(1);
}); 