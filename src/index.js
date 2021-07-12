import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Routes from "./Routes";
import reportWebVitals from "./reportWebVitals";

import { ChakraProvider } from "@chakra-ui/react";

import { TodosProvider } from "./components/TodosContext";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <TodosProvider>
        <Routes />
      </TodosProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
