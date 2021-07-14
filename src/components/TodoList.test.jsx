import { v4 as uuidv4 } from "uuid";
import { render, screen } from "../test-utils";
import TodoList from "./TodoList";

const uuid = uuidv4();

const mockTodo = {
  title: "testing",
  isCompleted: "TODO",
  id: uuid,
};

test("There should be a delete button", () => {
  render(<TodoList todo={mockTodo} />);
  const ButtonDelete = screen.getByAltText("delete");
  expect(ButtonDelete).toBeInTheDocument();
});
