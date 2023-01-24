import React from "react";
import Todo from "./Todo";
import Style from "./Todos.module.css";

const Todos = (props) => {
  return (
    <section className={Style.todos}>
      {props.todos.map((todo) => (
        <Todo todoChild={todo.todo} key={todo.id} onRemoveTodo={props.onRemoveTodo} />
      ))}
    </section>
  );
};

export default Todos;
