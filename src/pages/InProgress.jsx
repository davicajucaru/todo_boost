import { UnorderedList } from "@chakra-ui/react";
import { useContext } from "react";
import Menu from "../components/Menu";
import TitleMain from "../components/TitleMain";
import TodoList from "../components/TodoList";
import TodosContext from "../components/TodosContext";
import { Status } from "../constants/status";
import "../styles/app.css";

function InProgress() {
  const { todos, dispatch } = useContext(TodosContext);

  return (
    <div className="menu">
      <Menu />
      <div className="main">
        <TitleMain text="In Progress" />

        <UnorderedList>
          {todos
            .filter((x) => x.isCompleted === Status.IN_PROGRESS)
            .map((todo) => (
              <TodoList todo={todo} key={todo.id} />
            ))}
        </UnorderedList>
      </div>
    </div>
  );
}

export default InProgress;
