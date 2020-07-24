import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Nav, { SideBar } from "./Nav/Nav";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import About from "./About/About";

import styles from "./App.module.css";

function App() {
  const location = useLocation();
  return (
    <div className={styles.Container}>
      <div className={styles.Desktop}>
        <Nav />
      </div>
      <div className={styles.SideBar}>
        <SideBar />
      </div>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </AnimatePresence>
      <div id="contacts">
        <Contacts />
      </div>
      <div className={styles.Footer}>
        <p>© {new Date().getFullYear()} Devendra Singh.</p>
      </div>
    </div>
  );
}

export default App;
