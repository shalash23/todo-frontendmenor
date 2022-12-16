import React from "react";
import Header from "./Components/Header";
import "./App.css";
import { Container, Box } from "@mui/material";
import TodoList from "./Components/TodoList";
import images from "./assets/index";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMediaQuery } from "@mui/material";
import { TodoContextProvider } from "./TodoContext";
import { ThemeModeProvider } from "./ThemeContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    type: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "hsl(236, 33%, 92%)",
      dark: "hsl(236, 9%, 61%)",
      light: "hsl(233, 11%, 84%)",
      contrastText: "hsl(234, 11%, 52%)",
    },
    info: {
      main: "hsl(233, 14%, 35%)",
      dark: "hsl(237, 14%, 26%)",
    },
    background: {
      default: "hsl(235, 21%, 11%)",
      paper: "hsl(235, 24%, 19%)",
    },
    text: {
      primary: "hsl(234, 39%, 85%)",
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: "Josefin Sans",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    htmlFontSize: 18,
  },
});
console.log(darkTheme);

const App = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeModeProvider>
      <ThemeProvider theme={darkTheme}>
        <TodoContextProvider>
          <CssBaseline />
          <Container
            maxWidth={false}
            sx={{
              minHeight: "100vh",
              backgroundImage: matches
                ? `url(${images.bgMobileLight})`
                : `url(${images.bgDesktopLight})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 30%",
              backgroundColor:
                darkTheme.palette.background.default
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
        </TodoContextProvider>
      </ThemeProvider>
    </ThemeModeProvider>
  );
};

export default App;
