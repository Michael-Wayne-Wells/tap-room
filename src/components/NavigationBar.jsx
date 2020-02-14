import React from 'react';
import { Navbar, Button, Nav, FormControl, Form } from 'react-bootstrap';

function NavigationBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Tony Danza Tap Room</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#beerlist">Beer List</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      
    </div>
  );
}
 export default NavigationBar
