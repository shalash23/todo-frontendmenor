import React from "react";
import { Box, Paper, TextField } from "@mui/material";
import InputCheckbox from "./InputCheckbox";
const InputTodo = () => {
  return (
    <Paper
      elevation={2}
      sx={{
        mt: 8,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <InputCheckbox />
        <TextField
          id="standard-basic"
          variant="standard"
          sx={{
            width: "90%",
            paddingX: 0.5,
            paddingY: 1.5,
          }}
          placeholder="Create a new todo"
        />
      </Box>
    </Paper>
  );
};

export default InputTodo;
