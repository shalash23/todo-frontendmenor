import data from "../data";
import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todoTasks, setTodoTasks] = useState(data);

  
  return (
    <TodoContext.Provider value={[todoTasks,setTodoTasks]}>{children}</TodoContext.Provider>
  );
};
