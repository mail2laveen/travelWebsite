import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, Image } from "react-bootstrap";
import "../../Styles/navigation.css";
import { kittenHeader } from "/logo3.png";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar fixedTop default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <Image className="logo" src={kittenHeader} />{" "}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem
              eventKey={2}
              componentClass={Link}
              href="/about"
              to="/about"
            >
              About
            </NavItem>
            <NavItem
              eventKey={3}
              componentClass={Link}
              href="/services"
              to="/services"
            >
              Services
            </NavItem>
            <NavItem
              eventKey={4}
              componentClass={Link}
              href="/contact"
              to="/contact"
            >
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
