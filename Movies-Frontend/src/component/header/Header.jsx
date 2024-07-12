import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom"; // Correct import from react-router-dom
import { auto } from "@popperjs/core";

const Header = () => {
  return (
    <Navbar
      className="navbar-box"
      bg="dark"
      variant="dark"
      style={{ maxHeight: "50px", display: "flex" }}
    >
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "gold" }}>
          <FontAwesomeIcon icon={faVideoSlash} /> GOLD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/">
              HOME
            </NavLink>
            <NavLink className="nav-link" to="/watchlist">
              WATCHLIST
            </NavLink>
          </Nav>
          <Button
            className="me-2"
            variant="outline-info"
            style={{ height: "30px", padding: "0 5px" }}
          >
            LOGIN
          </Button>
          <Button
            className="me-2"
            variant="outline-info"
            style={{ height: "30px", padding: "0 5px" }}
          >
            REGISTER
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
