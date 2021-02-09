import React from "react";
import { connect } from "react-redux";

import Header from "./components/header.component";
import TodoList from "./components/todo-list.component";
import Footer from "./components/footer.component";

import {
  addNewTodo,
  changeCompletedTodo,
  fetchTodosAsync,
} from "../../redux/todos/actions";

export const Todos = ({
  todos,
  addTodo,
  fetchTodos,
  changeCompleted,
  ...props
}) => {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>My Todos App</h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <h2>List of Todos</h2>
          <div className="todoapp">
            <Header addTodo={addTodo} />
            {todos && (
              <TodoList
                todos={todos}
                fetchTodos={fetchTodos}
                onChangeCompleted={changeCompleted}
              />
            )}
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (e) => dispatch(addNewTodo(e)),
  changeCompleted: (e) => dispatch(changeCompletedTodo(e)),
  fetchTodos: () => dispatch(fetchTodosAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
