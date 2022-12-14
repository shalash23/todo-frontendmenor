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
    <Box sx={{ width: "auto" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs"
        indicatorColor="none"
        variant="standard"
      >
        <Tab
          value="All"
          label="All"
          sx={{
            fontSize: 15,
            textTransform: "none",
            fontFamily: "Josefin Sans",
            fontWeight: "700",
            color: "hsl(235, 19%, 35%)",
          }}
        />
        <Tab
          value="Active"
          label="Active"
          sx={{
            fontSize: 15,
            textTransform: "none",
            fontFamily: "Josefin Sans",
            fontWeight: "700",
            color: "hsl(235, 19%, 35%)",
            pl: 0,
          }}
        />
        <Tab
          value="Completed"
          label="Completed"
          sx={{
            fontSize: 15,
            textTransform: "none",
            fontFamily: "Josefin Sans",
            fontWeight: "700",
            color: "hsl(235, 19%, 35%)",
          }}
        />
      </Tabs>
    </Box>
  );
}
