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
            <Todos todo={todo} />
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
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body1"
            component="p"
            fontSize={14}
            noWrap
            paddingX={2}
            sx={{
              fontFamily: "Josefin Sans",
              fontWeight: "400",
            }}
          >
            5 items left
          </Typography>
          <TabsWrappedLabel />
          <Typography
            variant="body1"
            component="p"
            fontSize={13}
            noWrap
            paddingX={3}
            sx={{
              fontFamily: "Josefin Sans",
              fontWeight: "400",
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
