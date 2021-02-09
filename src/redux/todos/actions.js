import { ADD_NEW_TODO, CHANGE_COMPLETED_TODO, FETCH_TODOS } from "./types";

// export const addNewTodo = (text) => ({
//   type: ADD_NEW_TODO,
//   payload: text,
// });

// export const changeCompletedTodo = (id) => ({
//   type: CHANGE_COMPLETED_TODO,
//   payload: id,
// });

// export const fetchTodos = (todos) => ({
//   type: FETCH_TODOS,
//   payload: todos,
// });

// export const fetchTodosAsync = () => {
//   return async (dispatch) => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos");

//     const todos = await res.json();

//     console.log(todos);

//     dispatch(fetchTodos(todos));
//   };
// };
