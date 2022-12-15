import React from "react";
import Header from "./Components/Header";
import "./App.css";
import { Container, Box } from "@mui/material";
import TodoList from "./Components/TodoList";
import images from "./assets/index";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMediaQuery } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});
console.log(darkTheme);

const App = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          minHeight: "100vh",
          backgroundImage: matches
            ? `url(${images.bgMobileLight})`
            : `url(${images.bgDesktopLight})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 40%",
          aspectRatio: 1,
          backgroundColor: "white",
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
    </ThemeProvider>
  );
};

export default App;
