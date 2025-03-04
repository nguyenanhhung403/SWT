import { renderHook, act } from '@testing-library/react-hooks';
import { useTodos } from '../hooks/useTodos';

describe('useTodos', () => {
  it('should initialize with default todos', () => {
    const { result } = renderHook(() => useTodos([]));
    expect(result.current.todos).toEqual([]);
  });

  it('should add a new todo', () => {
    const { result } = renderHook(() => useTodos([]));
    act(() => {
      result.current.addTodo('New Todo');
    });
    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe('New Todo');
  });

  it('should toggle todo completion', () => {
    const { result } = renderHook(() => useTodos([{ id: 1, text: 'Todo', completed: false }]));
    act(() => {
      result.current.toggleComplete(1);
    });
    expect(result.current.todos[0].completed).toBe(true);
  });

  it('should delete a todo', () => {
    const { result } = renderHook(() => useTodos([{ id: 1, text: 'Todo', completed: false }]));
    act(() => {
      result.current.deleteTodo(1);
    });
    expect(result.current.todos).toHaveLength(0);
  });
}); 