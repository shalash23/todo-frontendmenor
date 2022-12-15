import React from "react";
import Todos from "./Todos";
import todoJson from "../../data.json";
import { Paper, Tabs, Tab, Box } from "@mui/material";
import TabsWrappedLabel from "./TabsWrappedLabel";

const TodoList = () => {
  const { tasks } = todoJson;

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
        <Box>
          <TabsWrappedLabel />
        </Box>
      </Paper>
    </div>
  );
};

export default TodoList;
