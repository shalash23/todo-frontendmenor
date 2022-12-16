import React from "react";
import { Paper, Typography } from "@mui/material";
import InputCheckbox from "./InputCheckbox";
import { AnimatePresence,motion } from "framer-motion";

const Todos = ({ todo }) => {
  return (
    <AnimatePresence>
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
        component={motion.div}
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.15 },
        }}
        initial={{
          y: '-50vh',
          opacity:0
        }}
        animate={{
          y: 0,
          opacity:1
        }}
        transition={{
          delay: 0.3,
          staggerChildren:0.3
        }}
        whileTap={{ scale: 0.9 }}
      >
        <InputCheckbox completed={todo.completed} id={todo.id} put={todo} />
        <Typography
          variant="body2"
          component="p"
          sx={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "hsl(234, 11%, 52%)" : "inherit",
          }}
        >
          {todo.task}
        </Typography>
      </Paper>
    </AnimatePresence>
  );
};

export default Todos;
