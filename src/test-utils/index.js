import React from "react";
import { render } from "@testing-library/react";
import { TodosProvider } from "../components/TodosContext";
import { StylesProvider } from "@chakra-ui/react";
import {} from "";
const AllTheProviders = ({ children }) => {
  return (
    <StylesProvider>
      <TodosProvider>{children}</TodosProvider>
    </StylesProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
