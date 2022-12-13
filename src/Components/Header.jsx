import React from "react";
import { Container } from "@mui/material";
import backgroundimage from '../assets/bg-desktop-light.jpg'

const styles = {
  headers: {
    backgroundImage: `url(${backgroundimage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover'
  }
}


const Header = () => {


  return (
    <Container maxWidth={false} style={styles.headers} sx={{
      height: '40vh',
    }}>
      <h1>Hello World</h1>
    </Container>
  );
};

export default Header;
