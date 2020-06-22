import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./Nav.module.css";

const resumeLink = "https://drive.google.com/file/d/171Izx1VIwkmizSslJPAWiBTSSUhwcd7g/view?usp=sharing";

function Nav() {
  return (
    <div>
      <nav className={styles.nav}>
        <NavLink to="/" exact className={styles.Logo} activeClassName={styles.LogoActive}>
          <motion.h2
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: .5 }}
            whileHover={{ scale: 1.2 }}
          >DEV</motion.h2>
        </NavLink>
        <div className={styles.navLinks}>
          <NavLink to="/about" className={styles.navItem} activeClassName={styles.navActive}>
            <motion.h2
              whileHover={{ scale: 1.2 }}
            >About</motion.h2>
          </NavLink>
          <NavLink to="/projects" className={styles.navItem} activeClassName={styles.navActive}>
            <motion.h2
              whileHover={{ scale: 1.2 }}
            >Projects</motion.h2>
          </NavLink>
          <a href="#contacts" className={styles.navItem}>
            <motion.h2
              whileHover={{ scale: 1.2 }}
            >Contacts</motion.h2>
          </a>
          <a href={resumeLink} target="_blank" className={styles.navItem}>
            <motion.h2
              whileHover={{ scale: 1.2 }}
            >Resume</motion.h2>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
