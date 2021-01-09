import Nav from "react-bootstrap/Nav";
import React from "react";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Routes from "./Routes"; 
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
      <LinkContainer to="/">
        <Navbar.Brand className="font-weight-bold text-muted">
        PlayerSwap Club 
        </Navbar.Brand>
      </LinkContainer>
        <Navbar.Toggle />
          <NavbarCollapse className="justify-content-end">
            <LinkContainer to="/signup">
            <Nav.Link >Sign Up</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </NavbarCollapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
