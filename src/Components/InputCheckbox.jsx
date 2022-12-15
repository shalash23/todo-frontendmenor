import React from "react";
import Checkbox from "@mui/material/Checkbox";
import CheckIcon from "@mui/icons-material/Check";
import RadioButtonUnchecked from "@mui/icons-material/RadioButtonUnchecked";
import Box from "@mui/material/Box";

const InputCheckbox = ({ completed, id, put }) => {
  console.log(put);
  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PUT",
        body: JSON.stringify({ ...put, completed: !completed }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log(response);
    } catch (err) {}
  };

  return (
    <Box>
      <Checkbox
        onClick={handleUpdate}
        checked={completed}
        icon={<RadioButtonUnchecked />}
        checkedIcon={
          <CheckIcon
            sx={{
              background:
                "linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%))",
              color: "blue",
              borderRadius: "50%",
              fontSize: 24,
            }}
          />
        }
      />
    </Box>
  );
};

export default InputCheckbox;
