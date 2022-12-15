import React from "react";
import { Paper, Typography } from "@mui/material";
import InputCheckbox from "./InputCheckbox";

const Todos = ({ todo }) => {
  return (
    <Paper
      elevation={12}
      // variant="outlined"
      square
      sx={{
        width: "100%",
        // paddingX: 1,
        // paddingY: 2,
        paddingY: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <InputCheckbox />
      <Typography
        variant="body1"
        component="p"
        sx={{
          color: "hsl(235, 19%, 35%)",
          fontFamily: "Josefin Sans",
          fontWeight: 600,
        }}
      >
        {todo.task}
      </Typography>
    </Paper>
  );
};

export default Todos;
