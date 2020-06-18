import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Nav.module.css";

function Nav() {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.Logo}>
          <NavLink to="/" exact className={styles.Logo} activeClassName={styles.navActive}>
            <h2>Home</h2>
          </NavLink>
        </div>
        <div className={styles.navLinks}>
          <NavLink to="/about" className={styles.navItem} activeClassName={styles.navActive}>
            <h2>About</h2>
          </NavLink>
          <NavLink to="/projects" className={styles.navItem} activeClassName={styles.navActive}>
            <h2>Projects</h2>
          </NavLink>
          {/* <NavLink to="#contacts" className={styles.navItem} activeClassName={styles.navActive}> */}
          <a href="#contacts" className={styles.navItem}>
            <h2>Contacts</h2>
          </a>
          {/* </NavLink> */}
          <NavLink to="/resume" target="_blank" className={styles.navItem} activeClassName={styles.navActive}>
            <h2>Resume</h2>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
