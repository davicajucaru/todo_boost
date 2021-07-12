import { createContext, useEffect, useReducer } from "react";

const initialTodos = "context";
const TodosContext = createContext(initialTodos);

export const ACTIONS = {
  ADD: "ADD",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
  CHANGE_STATUS: "CHANGE_STATUS",
};

function todosReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, action.payload];

    case ACTIONS.CHANGE_STATUS:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isCompleted: action.payload.status };
        }
        return todo;
      });

    case ACTIONS.TOGGLE:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });

    case ACTIONS.DELETE:
      return state.filter((todo) => todo.id !== action.payload);

    case ACTIONS.UPDATE:
      return [...action.payload];

    default:
      throw new Error("Unhandled action type");
  }
}

export const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, []);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      dispatch({
        type: ACTIONS.UPDATE,
        payload: savedTodos,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodosContext.Provider value={{ todos, dispatch }}>
        {children}
      </TodosContext.Provider>
    </>
  );
};

export default TodosContext;
