import { renderHook, act } from "@testing-library/react";
import { useTodos } from "../hooks/useTodos";
import { describe, test, expect } from "@jest/globals";

describe("useTodos hook", () => {
  test("should initialize with empty list", () => {
    const { result } = renderHook(() => useTodos());
    expect(result.current.todos).toEqual([]);
  });

  test("should add a new todo", () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.addTodo("Learn Testing");
    });
    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe("Learn Testing");
  });

  test("should toggle todo completed", () => {
    const initial = [{ id: 1, text: "Test", completed: false }];
    const { result } = renderHook(() => useTodos(initial));
    act(() => {
      result.current.toggleComplete(1);
    });
    expect(result.current.todos[0].completed).toBe(true);
  });
});
