import React from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./Nav.module.css";

const resumeLink = "https://drive.google.com/file/d/1JnW_FNXxLp5_s5X8L3DDp78TN4zAV2N8/view?usp=sharing";

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
          <a href={resumeLink} target="_blank" rel="noopener noreferrer" className={styles.navItem}>
            <motion.h2
              whileHover={{ scale: 1.2 }}
            >Resume</motion.h2>
          </a>
        </div>
      </nav>
    </div>
  );
}

function SideBar() {

  return (
    <div className={styles.Sidebar}>
      <NavLink to="/" exact className={styles.Logo} activeClassName={styles.LogoActive}>
        <motion.h2
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: .5 }}
          whileHover={{ scale: 1.2 }}
        >DEV</motion.h2>
      </NavLink>
      <SimpleMenu />
    </div>
  );
}

function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    // console.log(event.currentTarget)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.Menu}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <h1>:</h1>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><NavLink to="/about" className={styles.MenuLink} activeClassName={styles.navActive}> About</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink to="/projects" className={styles.MenuLink} activeClassName={styles.navActive}> Projects</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><a href="#contacts" className={styles.MenuLink}> Contacts</a></MenuItem>
        <MenuItem onClick={handleClose}><a href={resumeLink} target="_blank" rel="noopener noreferrer" className={styles.MenuLink}>Resume</a></MenuItem>
      </Menu>
    </div>
  );
}


export default Nav;
export { SideBar };
