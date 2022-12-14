import React from "react";
import Checkbox from "@mui/material/Checkbox";
import CheckIcon from "@mui/icons-material/Check";
import RadioButtonUnchecked from "@mui/icons-material/RadioButtonUnchecked";
import Box from "@mui/material/Box";

const InputCheckbox = () => {
  return (
    <Box>
      <Checkbox icon={<RadioButtonUnchecked />} checkedIcon={<CheckIcon />} />
    </Box>
  );
};

export default InputCheckbox;
