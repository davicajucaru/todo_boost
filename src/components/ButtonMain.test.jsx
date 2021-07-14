import { screen, render } from "@testing-library/react";
import ButtonMain from "./ButtonMain";

test("Button render", () => {
  render(<ButtonMain />);
  const buttonrender = screen.getByText(/Adicionar/i);
  expect(buttonrender).toBeInTheDocument();
});
