import { screen, render, fireEvent } from "@testing-library/react";
import App from "../pages/App";
import InputMain from "./InputMain";
import { TodosProvider } from "./TodosContext";
import { BrowserRouter as Router } from "react-router-dom";

test("Input render", () => {
  render(<InputMain />);
  const inputrender = screen.getByPlaceholderText(/Add an activity here/i);
  expect(inputrender).toBeInTheDocument();
});

test("Input testing", () => {
  render(
    <Router>
      <TodosProvider>
        <App />
      </TodosProvider>
    </Router>
  );
  const inputrender = screen.getByPlaceholderText(/Add an activity here/i);
  fireEvent.change(inputrender, { target: { value: "testing" } });
  expect(inputrender.value).toEqual("testing");
});
