import React from "react";

import { ReactComponent as TimesSolid } from "../../../assets/times-solid.svg";

const TodoListItem = ({ todo, onDelete, onChangeCompleted }) => {
  const { id, title, completed } = todo;

  const handleCompletedChanged = (id) => {
    onChangeCompleted(id);
  };

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={() => handleCompletedChanged(id)}
          />
          <div className="todo-text">{title}</div>
        </div>
        <div className="segment buttons">
          <button className="destroy" onClick={onDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
