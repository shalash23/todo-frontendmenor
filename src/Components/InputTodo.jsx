import React from "react";
import { Box, Paper, TextField } from "@mui/material";
import InputCheckbox from "./InputCheckbox";
const InputTodo = () => {
  const [data, setData] = React.useState({
    task: "",
    completed:false
    
  });
  const handleChange = (e) => {
    setData((prevData) => ({
      task: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    const {task,completed} = data
    e.preventDefault();
    const response = await fetch(
      "https://todo-frontendmentor-ead95-default-rtdb.firebaseio.com/tasks.json",
      {
        method: "POST",
        body: JSON.stringify({
          task,
          completed:'false',
        }),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
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
        <form action="submit" onSubmit={handleSubmit} style={{
          width:'100%'
        }}>
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
            value={data.task}
          />
        </form>
      </Box>
    </Paper>
  );
};

export default InputTodo;
