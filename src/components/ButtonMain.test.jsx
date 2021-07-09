import { render, screen } from "@testing-library/react";
import ButtonMain from "./ButtonMain";

test("Button render", () => {
  render(<ButtonMain />);
  const buttonRender = screen.getByText(/Add/i);
  expect(buttonRender).toBeInTheDocument();
});
