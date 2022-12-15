import React, { useContext} from "react";
import Todos from "./Todos";
import todoJson from "../../data.json";
import { Paper, Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { TodoContext } from "../TodoContext";

const TodoList = () => {
  const [tasks, setTasks] = useContext(TodoContext)
  
  if (!tasks) {

    return <div><CircularProgress/></div>
  }

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
        elevation={12}
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
            variant="body2"
            component="p"
            // fontSize={18}
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
