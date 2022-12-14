import React from "react";
import Todos from "./Todos";
import todoJson from "../../data.json";

const TodoList = () => {
  return (
    <div>
      {todoJson.map((todo) => {
        return (
          <div key={todo.id}>
            <Todos todo={todo} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
