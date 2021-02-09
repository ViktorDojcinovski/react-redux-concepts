import { ADD_NEW_TODO, CHANGE_COMPLETED_TODO, FETCH_TODOS } from "./types";

const INITIAL_STATE = {
  todos: [],
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
            title: action.payload,
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
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
