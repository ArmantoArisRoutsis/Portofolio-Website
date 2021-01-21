import {Nav,Navbar} from "react-bootstrap"
import React from 'react'

function Navigation() {
    return (
        <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{position:"fixed", width:"100%","z-index":"2"}}>
      <Navbar.Brand href="#home">V.C.</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Me</Nav.Link>
          <Nav.Link href="#work">My Work</Nav.Link>
          <Nav.Link href="#contact">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
    )
}

export default Navigation
