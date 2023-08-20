import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1 fw-bold text-primary">
            Contact List
          </span>
        </Link>
        <Link to="/newContact">
          <button type="button" className="btn btn-primary">
            Add new contact
          </button>
        </Link>
      </div>
    </nav>
  );
};
