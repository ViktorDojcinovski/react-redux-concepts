import React, { useEffect } from "react";
import TodoListItem from "./todo-list-item.component";
import { fetchTodos } from "../../../redux/todos/actions";

const TodoList = ({ todos, fetchTodos, onChangeCompleted }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

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
