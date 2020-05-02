import React from "react";
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

function Nav() {
  return (
    <div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navItem}>
          <h2>Home</h2>
        </Link>
        <div className={styles.navLinks}>
          <Link to="/projects" className={styles.navItem}>
            <h2>Projects</h2>
          </Link>
          <Link to="/contacts" className={styles.navItem}>
            <h2>Contacts</h2>
          </Link>
          <Link to="/resume" className={styles.navItem}>
            <h2>Resume</h2>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
