import { ADD_NEW_TODO, CHANGE_COMPLETED_TODO } from "./types";

const INITIAL_STATE = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false },
    { id: 2, text: "Build something fun!", completed: false },
    { id: 3, text: "Build something simple!", completed: false },
  ],
};

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
          },
        ],
      };
    case CHANGE_COMPLETED_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        }),
      };
    default:
      return {
        ...state,
      };
  }
};
