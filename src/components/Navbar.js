import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas, Button, Form  } from "react-bootstrap";

const CustomNavbar = () => {


  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3">
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
                
                {/* <NavDropdown className="nav-dropdown bg-white" title="More">
                  <NavDropdown.Item href="#action3">Categories</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Login</NavDropdown.Item>
                  
                </NavDropdown> */}
              </Nav>
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Custom Mobile Navbar */}
      {/* <header className="custom-navbar">
        <div className="logo">
          <img src="/Assets/Logo.png" alt="IreCooling" />
        </div>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={isMenuOpen ? "open" : ""}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/whychoose" onClick={toggleMenu}>Why Choose Us</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            <li className="phone-number">123-456-7890</li>
          </ul>
        </nav>
      </header> */}
    </>
  );
};

export default CustomNavbar;
