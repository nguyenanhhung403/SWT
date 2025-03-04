import React from "react";
import "./App.css"; // Import CSS thuần
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, addTodo, toggleComplete, toggleEdit, updateTodo, deleteTodo, setTodos } =
    useTodos([]);

  const onDeleteAll = () => {
    setTodos([]); // Xóa tất cả todos
  };

  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={todos}
        onToggleComplete={toggleComplete}
        onToggleEdit={toggleEdit}
        onUpdateTodo={updateTodo}
        onDeleteTodo={deleteTodo}
        onDeleteAll={onDeleteAll}
      />
    </div>
  );
}

export default App;
