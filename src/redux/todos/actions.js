import { ADD_NEW_TODO, CHANGE_COMPLETED_TODO } from "./types";

export const addNewTodo = (text) => ({
  type: ADD_NEW_TODO,
  payload: text,
});

export const changeCompletedTodo = (id) => ({
  type: CHANGE_COMPLETED_TODO,
  payload: id,
});
