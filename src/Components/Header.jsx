import React, { useContext } from "react";
import { Container, Paper, Box, Typography } from "@mui/material";
import images from "../assets/index";
import InputTodo from "./InputTodo";
import "./Header.css";
import { DefaultTheme } from "../ThemeContext";
const Header = ({changeTheme}) => {
  const [mode, setMode] = useContext(DefaultTheme)
  console.log(mode)

  return (
    <Container
      maxWidth={"sm"}
      sx={{
        paddingTop: 8,
      }}
    >
      <Paper
        sx={{
          backgroundColor: "transparent",
        }}
        elevation={0}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              color:'hsl(0, 0%, 98%)',
              letterSpacing: 12,
            }}
          >
            TODO
          </Typography>
          <img src={images.iconMoon} alt="" onClick={changeTheme}/>
        </Box>
        <InputTodo />
      </Paper>
    </Container>
  );
};

export default Header;
