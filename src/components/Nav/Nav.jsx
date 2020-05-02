import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="underline">
          <h2 className="heading">Home</h2>
        </Link>
        <div className="nav-links">
          <Link to="/projects" className="nav-item">
            <h2>Projects</h2>
          </Link>
          <Link to="/contacts" className="nav-item">
            <h2>Contacts</h2>
          </Link>
          <Link to="/resume" className="nav-item">
            <h2>Resume</h2>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
