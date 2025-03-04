import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  onToggleComplete,
  onToggleEdit,
  onUpdateTodo,
  onDeleteTodo,
  onDeleteAll,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTodos = todos.filter(todo => 
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div data-testid="todo-list" className="todo-list">
      <input 
        type="text" 
        placeholder="Tìm kiếm todos..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={onDeleteAll} className="add-button">Xóa tất cả</button>
      {filteredTodos.map((todo) => (
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
