import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Study" },
      { id: 2, content: "Gym" },
    ],
  };
  delete = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };
  AddFu = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
    });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">ToDo's</h1>
        <AddTodo Add={this.AddFu} />
        <Todos todos={this.state.todos} deleteTodo={this.delete} />
      </div>
    );
  }
}
export default App;
