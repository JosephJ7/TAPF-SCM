import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "/public/header2.css";
export default function Header3() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand
          href="https://www.akshayapatra.org/"
          target="_blank"
          rel="noopener norefferer"
        >
          <img src="../images/Final_Logo.png" alt="Akshaya Patra" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="/profile">PROFILE</Nav.Link>
            <Nav.Link href="/travel">TRAVEL</Nav.Link>
            <Nav.Link href="/trip">TRIP</Nav.Link>
            <Nav.Link href="/">LOGOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
