import React from "react";
import { Paper, Typography } from "@mui/material";
import InputCheckbox from "./InputCheckbox";

const Todos = ({ todo }) => {
  return (
    <Paper
      // elevation={12}
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
      <InputCheckbox completed={todo.completed} id={todo.id} put={todo} />
      <Typography
        variant="body2"
        component="p"
        sx={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? 'hsl(233, 14%, 35%)' : 'inherit'
        }}
      >
        {todo.task}
      </Typography>
    </Paper>
  );
};

export default Todos;
