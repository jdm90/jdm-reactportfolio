import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MainNav() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <Navbar expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Brand href="#home">Justin Miles</Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpanded(expanded ? false : 'expanded')}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/toolbox"
                onClick={() => setExpanded(false)}
              >
                Toolbox
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/experiences"
                onClick={() => setExpanded(false)}
              >
                Experiences
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => setExpanded(false)}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
