import React, { useEffect } from "react";
import Todos from "./Todos";
import todoJson from "../../data.json";
import { Paper, Box, Typography } from "@mui/material";
import TabsWrappedLabel from "./TabsWrappedLabel";

const TodoList = () => {
  // const { tasks } = todoJson;

  const [tasks, setTasks] = React.useState([todoJson.tasks]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((res) => {
        setTasks(res);
        console.log(res);
      });
  }, []);

  return (
    <div>
      {tasks.map((todo) => {
        return (
          <div key={todo.id}>
            <Todos todo={todo} key={todo.tasks} />
          </div>
        );
      })}
      <Paper
        elevation={18}
        // variant="outlined"
        square
        sx={{
          width: "100%",
          paddingY: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Typography
            variant="body1"
            component="p"
            fontSize={14}
            noWrap
            sx={{
              fontFamily: "Josefin Sans",
              fontWeight: "400",
              color: "hsl(233, 11%, 84%)",
            }}
          >
            5 items left
          </Typography>
          <Typography
            variant="body1"
            component="p"
            fontSize={13}
            noWrap
            sx={{
              fontFamily: "Josefin Sans",
              fontWeight: "400",
              color: "hsl(233, 11%, 84%)",
            }}
          >
            Clear Completed
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default TodoList;
