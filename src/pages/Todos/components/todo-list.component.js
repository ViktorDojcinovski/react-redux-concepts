import React from "react";
import TodoListItem from "./todo-list-item.component";

const TodoList = ({ todos, onChangeCompleted }) => {
  const renderedListItems = todos.map((todo) => {
    return (
      <TodoListItem
        key={todo.id}
        todo={todo}
        onChangeCompleted={onChangeCompleted}
      />
    );
  });

  return <ul className="todo-list">{renderedListItems}</ul>;
};

export default TodoList;
