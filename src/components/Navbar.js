import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas, Button, Form  } from "react-bootstrap";

const CustomNavbar = () => {


  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-2">
        <Container fluid>
        
        <h3 className="text-center">
        {/* <img src="../Assets/Logo.png" alt="IreCooling" className="brand" /> */}
         IreCooling Services</h3>
          {/* <Navbar.Brand href="#">   
           </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/services">Services</Nav.Link>                
                <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
                <Nav.Link as={Link} to="/whychoose">Why Choose Us</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
       
    </>
  );
};

export default CustomNavbar;
