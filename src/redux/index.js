import { createStore } from "redux";

const INITIAL_STATE = {
  counter: 1,
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

export const incrementCounter = () => ({
  type: "INCREMENT_COUNTER",
});

export const decrementCounter = () => ({
  type: "DECREMENT_COUNTER",
});

export const addNewTodo = (text) => ({
  type: "ADD_NEW_TODO",
  payload: text,
});

export const changeCompletedTodo = (id) => ({
  type: "CHANGE_COMPLETED_TODO",
  payload: id,
});

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        counter: ++state.counter,
      };
    case "DECREMENT_COUNTER":
      return {
        counter: --state.counter,
      };
    case "ADD_NEW_TODO":
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
    case "CHANGE_COMPLETED_TODO":
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

export const store = createStore(reducer);
