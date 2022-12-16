import React, { useContext } from "react";
import Todos from "./Todos";
import { Paper, Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { TodoContext } from "../TodoContext";

import TabsWrappedLabel from "./TabsWrappedLabel";
const TodoList = () => {
  const [tasks, setTasks] = useContext(TodoContext);

  if (!tasks) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div >
        {tasks.map((todo) => {
          return (
            <div
           
              key={todo.id}
            >
              <Todos todo={todo} key={todo.tasks} />
            </div>
          );
        })}
      <Paper
        // elevation={12}
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
            variant="subtitle2"
            component="p"
            // fontSize={18}
            noWrap
            // sx={{
            //   fontFamily: "Josefin Sans",
            //   fontWeight: "400",
            //   color: "hsl(233, 11%, 84%)",
            // }}
          >
            5 items left
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            noWrap
            // sx={{
            //   fontFamily: "Josefin Sans",
            //   fontWeight: "400",
            //   color: "hsl(233, 11%, 84%)",
            // }}
          >
            Clear Completed
          </Typography>
        </Box>
      </Paper>
      <Box marginTop={3}>

      <TabsWrappedLabel/>
      </Box>

      
    </div>
  );
};

export default TodoList;
