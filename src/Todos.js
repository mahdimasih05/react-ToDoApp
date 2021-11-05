import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const TodoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="col s6 collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <i
            className="delebut material-icons"
            onClick={() => {
              // eslint-disable-next-line
              {
                deleteTodo(todo.id);
              }
            }}
          >
            delete
          </i>
        </div>
      );
    })
  ) : (
    <p className="center">There is no plan!</p>
  );
  return <div className="todos collection">{TodoList}</div>;
};

export default Todos;
