import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState("All");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "80%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs"
      >
        <Tab value="All" label="All" />
        <Tab value="Active" label="Active" />
        <Tab value="Completed" label="Completed" />
      </Tabs>
    </Box>
  );
}
