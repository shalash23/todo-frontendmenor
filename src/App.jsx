import React from "react";
import Header from "./Components/Header";
import "./App.css";
import { Container, Box } from "@mui/material";
import Todos from "./Components/Todos";
import TodoList from "./Components/TodoList";
import images from "./assets/index";

const App = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${images.bgMobileLight})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 50%",
      }}
    >
      <Box>
        <Header />
        <Container
          maxWidth={"sm"}
          sx={{
            paddingTop: 1,
          }}
        >
          <TodoList />
        </Container>
      </Box>
    </Container>
  );
};

export default App;
