import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Nav, { SideBar } from "./Nav/Nav";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import About from "./About/About";
import firebase from "../firebase";
import styles from "./App.module.css";

function App() {
  const [resumeLink, setResumeLink] = useState("");

  useEffect(() => {
    const ref = firebase.firestore().collection("resume").doc("link1");
    ref.get().then((data) => {
      setResumeLink(data.data().link);
      console.log(data.data());
    });
  },[]);


  const location = useLocation();
  return (
    <div className={styles.Container}>
      <div className={styles.Desktop}>
        <Nav resumeLink={resumeLink} />
      </div>
      <div className={styles.SideBar}>
        <SideBar resumeLink={resumeLink} />
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
