import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";
import TodoList from "../components/TodoList";

describe("TodoList", () => {
  test("renders todos", () => {
    const todos = [
      { id: 1, text: "Todo 1", completed: false },
      { id: 2, text: "Todo 2", completed: true },
    ];
    render(
      <TodoList
        todos={todos}
        onToggleComplete={() => {}}
        onToggleEdit={() => {}}
        onUpdateTodo={() => {}}
        onDeleteTodo={() => {}}
      />
    );

    expect(screen.getByText("Todo 1")).toBeInTheDocument();
    expect(screen.getByText("Todo 2")).toBeInTheDocument();
  });
});
