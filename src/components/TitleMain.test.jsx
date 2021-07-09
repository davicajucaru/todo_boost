import { render, screen } from "@testing-library/react";
import TitleMain from "./TitleMain";

test("Title Render", () => {
  render(<TitleMain />);
  const TitleRender = screen.getByText(/To Do List/i);
  expect(TitleRender).toBeInTheDocument();
});
