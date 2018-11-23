import React from "react";
import { Link } from "gatsby";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
        <Link className="navbar-item" to="/contact/examples">
          Form Examples
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
