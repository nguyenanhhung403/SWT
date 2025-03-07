import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, beforeEach, jest } from "@jest/globals";
import TodoItem from "../components/TodoItem";

describe("TodoItem", () => {
  const mockTodo = {
    id: 1,
    text: "Test Todo",
    completed: false,
    editing: false,
  };
  const mockOnToggleComplete = jest.fn();
  const mockOnToggleEdit = jest.fn();
  const mockOnUpdateTodo = jest.fn();
  const mockOnDeleteTodo = jest.fn();

  beforeEach(() => {
    render(
      <TodoItem
        todo={mockTodo}
        onToggleComplete={mockOnToggleComplete}
        onToggleEdit={mockOnToggleEdit}
        onUpdateTodo={mockOnUpdateTodo}
        onDeleteTodo={mockOnDeleteTodo}
      />
    );
  });

  test("renders todo text", () => {
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  test("calls onToggleComplete when click complete button", () => {
    fireEvent.click(screen.getByTestId("complete-button"));
    expect(mockOnToggleComplete).toHaveBeenCalledWith(1);
  });

  test("calls onDeleteTodo when click delete button", () => {
    fireEvent.click(screen.getByTestId("delete-button"));
    expect(mockOnDeleteTodo).toHaveBeenCalledWith(1);
  });
});
