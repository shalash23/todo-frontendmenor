import { Container } from "@mui/material";
import React from "react";
import Header from "./Components/Header";

const styles = {
  headers: {
    backgroundImage: `url(${backgroundimage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

const App = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default App;
