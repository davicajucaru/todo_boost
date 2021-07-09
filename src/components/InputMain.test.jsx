import { fireEvent, render, screen } from "@testing-library/react";
import InputMain from "./InputMain";

test("Input Render", () => {
  render(<InputMain />);
  const InputRender = screen.getByPlaceholderText(/Add an activity here/i);
  expect(InputRender).toBeInTheDocument();
});

test("Testing the input", async () => {
  render(<InputMain />);
  const inputRender = screen.getByPlaceholderText(/Add an activity here/i);
  expect(inputRender).toBeInTheDocument();
  fireEvent.change(inputRender, { target: { value: "testing" } });
  expect(inputRender.value).toEqual("testing");
});
