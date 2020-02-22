import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavigationBar() {
  return (
    <div>
      <style jsx>
        {`
          .navbar {
            background-color: rgba(0, 0, 0, 0.5);
            box-shadow: 5px 5px 5px #000000;
          }
        `}
      </style>
      <Navbar variant="dark" expand="lg">
        <Navbar.Brand href="/">Tony Danza Tap Room</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#beerlist">Beer List</Nav.Link>
            <Nav.Link href="#newbeer">Add a Beer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavigationBar;
