import React from "react";
import { Container,Typography } from "@mui/material";
import images from '../assets/index'
import './Header.css';

const styles = {
  fonts: {
    fontFamily: 'Josefin Sans',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight:400
  },
  wrapper: {
    paddingTop: '5em',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems:'center'
  }
}

const Header = () => {
  console.log(images)
  return (
    <Container maxWidth={"md"} disableGutters={false} style={styles.wrapper}>
      <Typography style={styles.fonts} variant="h2" component="h1">
        Todo
      </Typography>
      <img src={images.iconMoon} alt="moon icon" width='30px' height='40px' styles={{
        padding:'20px'
      }} />
    </Container>
  );
};

export default Header;
