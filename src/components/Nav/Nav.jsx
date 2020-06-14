import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Nav.module.css";
import Contacts from "../Contacts/Contacts";

function Nav() {
  return (
    <div style={{ position: "fixed", width: "100%" }}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.navItem} exact activeClassName={styles.navActive}>
          <h2>Home</h2>
        </NavLink>
        <div className={styles.navLinks}>
          <NavLink to="/projects" className={styles.navItem} activeClassName={styles.navActive}>
            <h2>Projects</h2>
          </NavLink>
          <NavLink to="/contacts" className={styles.navItem} activeClassName={styles.navActive}>
            <h2>Contacts</h2>
          </NavLink>
          <NavLink to="/resume" target="_blank" className={styles.navItem} activeClassName={styles.navActive}>
            <h2>Resume</h2>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
