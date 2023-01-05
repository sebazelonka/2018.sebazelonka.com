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
  Container,
} from "reactstrap";

const Navi = styled(Nav)`
  margin-left: auto;
`;

const NavigationWrapper = styled(Navbar)`
  background-color: #000 !important;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 100;

  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    height: 5px;
    left: 0;
    right: 0;
    background-image: linear-gradient(30deg, #b4ec51, #00c6d1);
  }
  &.home {
    position: absolute !important;
    bottom: 0 !important;
    .navbar-brand {
      opacity: 0;
    }
  }
  /* &.sticky {
    position: fixed !important;
    top: 0;
    bottom: initial !important;
    .navbar-brand {
      opacity: 1;
    }
  } */
  a {
    font-family: "exo 2", sans-serif;
    color: #fff;
    font-weight: 700;
  }
  .navbar-brand {
    background-image: linear-gradient(30deg, #b4ec51, #00c6d1);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
`;

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <NavigationWrapper
        expand="md"
        className={`${this.props.class} navbar-dark bg-dark`}
      >
        <Container style={{ display: "flex" }}>
          <NavbarBrand href="/">Sebastian Zelonka</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Navi className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about/">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/articles/">Articles</NavLink>
              </NavItem>
            </Navi>
          </Collapse>
        </Container>
      </NavigationWrapper>
    );
  }
}
