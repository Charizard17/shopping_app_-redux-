import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";
import { Link } from "react-router-dom";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" expand="md">
        <NavbarBrand>
          <Link to="/">Home</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/recipe">Food Recipe</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/shopping">Shopping Power</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/saveproduct">Add New Product</Link>
              </NavLink>
            </NavItem>
            <CartSummary />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
