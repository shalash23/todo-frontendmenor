import React from "react";
import Checkbox from "@mui/material/Checkbox";
import CheckIcon from "@mui/icons-material/Check";
import RadioButtonUnchecked from "@mui/icons-material/RadioButtonUnchecked";
import Box from "@mui/material/Box";

const InputCheckbox = ({ completed }) => {
  console.log(completed);
  return (
    <Box>
      <Checkbox
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
