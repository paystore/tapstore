import React from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,  
} from "reactstrap";
import logo from "../assets/images/logos/logo_branca.svg";

const Header = () => {
  
  return (
    <Navbar color="dark" dark expand="md">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          
        </NavbarBrand>        
      </div>
      

        <Nav className="me-auto" navbar>
           <img
              src={logo}
              alt="profile"
              style={{padding: 20, height: "70%", width:"70%"}}              
            ></img>
        </Nav>              
    </Navbar>
  );
};

export default Header;
