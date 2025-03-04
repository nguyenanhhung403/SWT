import { useState } from "react";
import AlertMessage from "./AlertMessage";

export default function TodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      setErrorMsg("Todo không được để trống!");
      return;
    }
    onAdd(inputValue.trim());
    setInputValue("");
    setErrorMsg("");
  };

  return (
    <div>
      <AlertMessage message={errorMsg} onClose={() => setErrorMsg("")} />
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          data-testid="todo-input"
          className="todo-input"
          type="text"
          placeholder="Add new todo..."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setErrorMsg("");
          }}
        />
        <button data-testid="add-button" type="submit" className="add-button">
          Add
        </button>
      </form>
    </div>
  );
}
