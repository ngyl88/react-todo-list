import React from "react";
import Title from "./Title";        // Notes: variable from Default Export
//import {Title} from "./Title";    // Notes: variable from Named Export
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      <Title title={props.title} />
      <ul>
        {props.todos.map((todo, key) => {
          return <Todo key={key} item={todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
