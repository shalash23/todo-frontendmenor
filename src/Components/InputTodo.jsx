import React from "react";
import { Box, Paper, TextField } from "@mui/material";
import InputCheckbox from "./InputCheckbox";
const InputTodo = () => {
  const [data, setData] = React.useState({
    task: "",
  });
  const handleChange = (e) => {
    setData((prevData) => ({
      task: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      body: JSON.stringify({
        data,
      }),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
  };

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
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </Box>
    </Paper>
  );
};

export default InputTodo;
