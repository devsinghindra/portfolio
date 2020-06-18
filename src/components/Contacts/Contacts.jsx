import React from "react";
import styles from "./Contacts.module.css";
import { LinkedIn, GitHub, Mail } from "@material-ui/icons";

function Contacts() {


  const linkStyle = {
    color: 'white',
    height: '3rem',
    width: '3rem',
    margin: '5px 10px'
  };


  return (
    <div className={styles.Container}>
      <div className={styles.Touch}>
        <h1>Love programming as much as I do?</h1>
        <p> Let's make something bigger together.</p>
      </div>
      <div className={styles.Links}>
        <div className={styles.Element}>
          <Mail style={linkStyle} />
          <a target="_blank" rel="noopener noreferrer" href="mailto:devsinghindra@gmail.com">
            DEVSINGHINDRA@GMAIL.COM
          </a>
        </div>
        <div className={styles.Element}>
          <LinkedIn style={linkStyle} />
          <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/devsinghindra">
            On LinkedIn.
          </a>
        </div>
        <div className={styles.Element}>
          <GitHub style={linkStyle} />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/devsinghindra">
            On Github.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
