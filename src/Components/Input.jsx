import React from "react";
import { Container } from "@mui/material";
import images from "../assets/index";

const styles = {
  container: {
    backgroundColor: "white",
    padding: "1em",
        width: "50%",
    marginTop:'3em'
  },
};

const Input = () => {
  return (
    <Container style={styles.container}>
      <img src={images.iconCheck} alt="" srcset="" />
    </Container>
  );
};

export default Input;
