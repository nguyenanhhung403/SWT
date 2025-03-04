import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  onToggleComplete,
  onToggleEdit,
  onUpdateTodo,
  onDeleteTodo,
}) {
  return (
    <div data-testid="todo-list" className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onToggleEdit={onToggleEdit}
          onUpdateTodo={onUpdateTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
}
