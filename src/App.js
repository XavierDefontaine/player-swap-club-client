import Nav from "react-bootstrap/Nav";
import React, { useEffect, useState } from "react";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Navbar from "react-bootstrap/Navbar";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";
import "./App.css";
import Routes from "./Routes"; 
import { LinkContainer } from "react-router-bootstrap";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        console.log(e);
      }
    }
  
    setIsAuthenticating(false);
  }
  
  async function handleLogout(){
    await Auth.signOut();
    userHasAuthenticated(false);
  }

  return (
    !isAuthenticating && (
      <div className="App container py-3">
        <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
          PlayerSwap Club 
          </Navbar.Brand>
        </LinkContainer>
          <Navbar.Toggle />
            <NavbarCollapse className="justify-content-end">
              { isAuthenticated? (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              ) : (
                <>
                  <LinkContainer to="/signup">
                    <Nav.Link >Sign Up</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </NavbarCollapse>
        </Navbar>

        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
      </div>
    )
  );

}

export default App;
