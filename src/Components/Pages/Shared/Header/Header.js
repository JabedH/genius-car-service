import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../../images/logo.png";
import { Link } from "react-router-dom";
import RequireAuth from "../../Login/RequireAuth/RequireAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.Init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="primary"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} height="30px" alt="" />
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="About">
              About
            </Nav.Link>
            {user ? (
              <button onClick={handleSignOut}>Log out</button>
            ) : (
              <Nav.Link as={Link} to="Login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
