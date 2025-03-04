import { useState } from "react";
import { Edit, Trash, CheckSquare, Square, Save } from "lucide-react";

export default function TodoItem({
  todo,
  onToggleComplete,
  onToggleEdit,
  onUpdateTodo,
  onDeleteTodo,
}) {
  const [editValue, setEditValue] = useState(todo.text);

  const handleSave = () => {
    if (!editValue.trim()) return;
    onUpdateTodo(todo.id, editValue.trim());
  };

  return (
    <div data-testid="todo-item" className="todo-item">
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {/* Nút toggle complete */}
        <button
          data-testid="complete-button"
          className="icon-button"
          onClick={() => onToggleComplete(todo.id)}
        >
          {todo.completed ? <CheckSquare /> : <Square />}
        </button>

        {/* Text hoặc ô input khi đang edit */}
        {todo.editing ? (
          <input
            data-testid="edit-input"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        ) : (
          <span
            className={`todo-item-text ${todo.completed ? "completed" : ""}`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div>
        {/* Edit/Save button */}
        {todo.editing ? (
          <button
            data-testid="save-button"
            className="icon-button"
            onClick={handleSave}
          >
            <Save />
          </button>
        ) : (
          <button
            data-testid="edit-button"
            className="icon-button"
            onClick={() => onToggleEdit(todo.id)}
          >
            <Edit />
          </button>
        )}

        {/* Delete button */}
        <button
          data-testid="delete-button"
          className="icon-button"
          onClick={() => onDeleteTodo(todo.id)}
        >
          <Trash />
        </button>
      </div>
    </div>
  );
}
