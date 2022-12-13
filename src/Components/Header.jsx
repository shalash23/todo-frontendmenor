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
   
      <h1>Hello World</h1>
  );
};

export default Header;
