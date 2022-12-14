import React from "react";
import Header from "./Components/Header";
import "./App.css";
import { Container, Box } from "@mui/material";
import Todos from "./Components/Todos";
import TodoList from "./Components/TodoList";

const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Container
          maxWidth={"sm"}
          sx={{
            paddingTop: 1,
          }}
        >
          <TodoList />
        </Container>
      </Container>
    </main>
  );
};

export default App;
