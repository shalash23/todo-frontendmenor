import React from "react";
import { Container, Paper, Box, Typography } from "@mui/material";
import images from "../assets/index";
import InputTodo from "./InputTodo";
import "./Header.css";
const Header = () => {
  return (
    <Container
      maxWidth={"sm"}
      sx={{
        paddingTop: 6,
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
            variant="h3"
            component="h1"
            sx={{
              color: "white",
              fontWeight: '700',
              letterSpacing: 12,
            }}
          >
            TODO
          </Typography>
          <img src={images.iconMoon} alt="" />
        </Box>
        <InputTodo />
      </Paper>
    </Container>
  );
};

export default Header;
