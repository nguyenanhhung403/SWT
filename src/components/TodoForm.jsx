import { useState } from "react";
import AlertMessage from "./AlertMessage";

export default function TodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      setErrorMsg("Todo không được để trống!");
      setSuccessMsg("");
      return;
    }
    onAdd(inputValue.trim());
    setInputValue("");
    setErrorMsg("");
    setSuccessMsg("Todo đã được thêm thành công!");
  };

  return (
    <div>
      <AlertMessage message={errorMsg} onClose={() => setErrorMsg("")} />
      {successMsg && <AlertMessage message={successMsg} onClose={() => setSuccessMsg("")} />}
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
            setSuccessMsg("");
          }}
        />
        <button data-testid="add-button" type="submit" className="add-button">
          Add
        </button>
      </form>
    </div>
  );
}
