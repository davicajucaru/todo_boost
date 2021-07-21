import Menu from "../components/Menu";
import InputMain from "../components/InputMain";
import ButtonMain from "../components/ButtonMain";
import { UnorderedList } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import TodosContext, { ACTIONS } from "../components/TodosContext";

import "../styles/app.css";
import TitleMain from "../components/TitleMain";
import { useCallback, useContext, useState } from "react";
import TodoList from "../components/TodoList";
import { Status } from "../constants/status";

function App() {
  const [value, setValue] = useState("");

  const { todos, dispatch } = useContext(TodosContext);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const uuid = uuidv4();

      dispatch({
        type: ACTIONS.ADD,
        payload: { title: value, isCompleted: Status.TODO, id: uuid },
      });

      setValue("");
    },
    [value, dispatch]
  );

  return (
    <div className="menu">
      <Menu />
      <div className="main">
        <form onSubmit={handleSubmit} className="main">
          <TitleMain text="RAMYRES É O MELHOR" />
          <InputMain value={value} setValue={setValue} />
          <ButtonMain id="main-button" value={value} />
        </form>

        <UnorderedList>
          {todos
            .filter((x) => x.isCompleted === Status.TODO)
            .map((todo) => (
              <TodoList todo={todo} key={todo.id} />
            ))}
        </UnorderedList>
      </div>
    </div>
  );
}

export default App;
