import { screen, render } from "@testing-library/react";
import TitleMain from "./TitleMain";

test("Title render", () => {
  render(<TitleMain text="To Do List" />);
  const titlerender = screen.getByText(/To Do List/i);
  expect(titlerender).toBeInTheDocument();
});
