import React, { useCallback, useContext } from "react";
import { ListItem } from "@chakra-ui/react";
import "../styles/todolist.css";
import TodosContext, { ACTIONS } from "./TodosContext";

import { Status } from "../constants/status";

import ImgDelete from "../assets/cancel-mark.svg";

import { Select } from "@chakra-ui/react";

const TodoList = ({ todo }) => {
  const { dispatch } = useContext(TodosContext);

  const handleToggle = useCallback(
    (status) =>
      dispatch({
        type: ACTIONS.CHANGE_STATUS,
        payload: {
          id: todo.id,
          status,
        },
      }),
    [todo, dispatch]
  );
  const handleDelete = useCallback(
    () => dispatch({ type: ACTIONS.DELETE, payload: todo.id }),
    [todo, dispatch]
  );

  return (
    <div className="list main">
      <ListItem>
        {todo.title}
        <div className="select-group">
          <Select
            onChange={(select) => handleToggle(select.target.value)}
            name=""
            id=""
          >
            <option value={Status.TODO}>todo</option>
            <option value={Status.IN_PROGRESS}> in progress</option>
            <option value={Status.DONE}>done</option>
          </Select>
          <button id="delete" onClick={handleDelete}>
            <img alt="delete" src={ImgDelete} />
          </button>
        </div>
      </ListItem>
    </div>
  );
};

export default TodoList;
