import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoForm from "../components/TodoForm";
import { describe, test, expect, jest } from "@jest/globals";

// Component test bao bọc để quản lý state successMsg
function TestTodoForm({ onAdd }) {
  const [successMsg, setSuccessMsg] = useState("");
  return (
    <TodoForm
      onAdd={onAdd}
      successMsg={successMsg}
      setSuccessMsg={setSuccessMsg}
    />
  );
}

describe("TodoForm", () => {
  test("calls onAdd and shows success message when input is valid", () => {
    const mockOnAdd = jest.fn();
    render(<TestTodoForm onAdd={mockOnAdd} />);

    // Nhập dữ liệu vào input
    const input = screen.getByTestId("todo-input");
    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(screen.getByTestId("add-button"));

    // Kiểm tra callback được gọi với giá trị "Test Todo"
    expect(mockOnAdd).toHaveBeenCalledWith("Test Todo");
    // Kiểm tra thông báo thành công xuất hiện
    expect(
      screen.getByText("Todo đã được thêm thành công!")
    ).toBeInTheDocument();
  });

  test("shows error message when input is empty", () => {
    render(<TestTodoForm onAdd={() => {}} />);
    fireEvent.click(screen.getByTestId("add-button"));
    expect(screen.getByText("Todo không được để trống!")).toBeInTheDocument();
  });
});
