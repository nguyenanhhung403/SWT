import React from "react";
import {
  render,
  screen,
  fireEvent,
  test,
  expect,
} from "@testing-library/react";
import jest from "jest-mock";
import App from "../App";
import { describe } from "jest";

describe("App integration tests", () => {
  test("adds a new todo and shows success message", () => {
    render(<App />);

    // Thêm Todo mới
    const input = screen.getByTestId("todo-input");
    fireEvent.change(input, { target: { value: "Write Unit Tests" } });
    fireEvent.click(screen.getByTestId("add-button"));

    // Kiểm tra Todo mới và thông báo thành công
    expect(screen.getByText("Write Unit Tests")).toBeInTheDocument();
    expect(
      screen.getByText("Todo đã được thêm thành công!")
    ).toBeInTheDocument();
  });

  test("deletes a todo and shows delete success message", () => {
    render(<App />);

    // Thêm Todo cần xóa
    const input = screen.getByTestId("todo-input");
    fireEvent.change(input, { target: { value: "Todo to delete" } });
    fireEvent.click(screen.getByTestId("add-button"));

    // Kiểm tra Todo vừa được thêm
    expect(screen.getByText("Todo to delete")).toBeInTheDocument();

    // Click nút Delete
    const deleteButton = screen.getByTestId("delete-button");
    fireEvent.click(deleteButton);

    // Kiểm tra thông báo xóa thành công
    expect(
      screen.getByText("Todo đã được xóa thành công!")
    ).toBeInTheDocument();
    // Kiểm tra rằng Todo không còn xuất hiện
    expect(screen.queryByText("Todo to delete")).not.toBeInTheDocument();
  });

  test("edits a todo and shows edit success message", () => {
    // Giả lập window.prompt trả về giá trị mới
    window.prompt = jest.fn().mockReturnValue("Edited Todo");

    render(<App />);

    // Thêm Todo ban đầu
    const input = screen.getByTestId("todo-input");
    fireEvent.change(input, { target: { value: "Original Todo" } });
    fireEvent.click(screen.getByTestId("add-button"));

    // Kiểm tra Todo ban đầu có hiển thị
    expect(screen.getByText("Original Todo")).toBeInTheDocument();

    // Click nút Edit
    const editButton = screen.getByTestId("edit-button");
    fireEvent.click(editButton);

    // Kiểm tra thông báo chỉnh sửa thành công
    expect(
      screen.getByText("Todo đã được chỉnh sửa thành công!")
    ).toBeInTheDocument();
    // Kiểm tra rằng Todo mới hiển thị text đã chỉnh sửa
    expect(screen.getByText("Edited Todo")).toBeInTheDocument();
  });
});