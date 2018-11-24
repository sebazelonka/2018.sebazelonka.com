import React from "react";
import styled from "styled-components";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

const NavigationWrapper = styled(Navbar)`
  background-color: #000 !important;
  position: fixed !important;
  left: 0;
  right: 0;
  z-index: 1;
  &::after {
    position: absolute;
    content: "";
    bottom: -5px;
    height: 5px;
    left: 0;
    right: 0;
    background-image: linear-gradient(30deg, #b4ec51, #00c6d1);
  }
  a {
    font-family: "exo 2", sans-serif;
    color: #fff;
    font-weight: 700;
  }
  .navbar-brand {
    background-image: linear-gradient(30deg, #b4ec51, #00c6d1);
    color: transparent;
    background-clip: text;
  }
`;

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <NavigationWrapper expand="md">
        <Container>
          <NavbarBrand href="/">Sebastian Zelonka</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </NavigationWrapper>
    );
  }
}
