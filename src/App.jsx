import React from "react";
import { Container } from "@mui/material";
import Header from "./Components/Header";
import backgroundimage from "./assets/bg-desktop-light.jpg";
import Input from "./Components/Input";

const styles = {
  headers: {
    backgroundImage: `url(${backgroundimage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

const App = () => {
  return (
    <Container maxWidth={false} style={styles.headers} sx={{
      height:'40vh',
    }}>
      <Header />
      <Container>
        <Input>
          
        </Input>
      </Container>
    </Container>
  );
};

export default App;
