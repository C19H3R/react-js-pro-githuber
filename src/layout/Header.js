import React, { useState, useContext } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

function Header() {
  const context = useContext(UserContext);
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const toggle = () => setIsToggleOpen(!isToggleOpen);

  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand className="ms-2">
        <Link to="/" className="text-white" style={{ textDecoration: "none" }}>
          Pro-Githuber
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white">
        {context.user?.email ? context.user.email : ""}
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isToggleOpen} navbar>
        <Nav className="ms-auto">
          {context.user ? (
            <NavItem>
              <NavLink
                onClick={() => {
                  context.setUser(null);
                }}
                tag={Link}
                to="/"
                className="text-white"
              >
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/signup" className="text-white">
                  SignUp
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signin" className="text-white">
                  SignIn
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
