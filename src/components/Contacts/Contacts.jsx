import React from "react";
import styles from "./Contacts.module.css";
import { LinkedIn, GitHub, Facebook } from "@material-ui/icons";

function Contacts() {

  const buttonStyle = {
    color: 'white',
    height: '4rem',
    width: '4rem',
    margin: '0 10px'
  };

  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>Contact</h1>
      <div className={styles.Element}>
        <div>
          <a target="_blank" href="https://linkedin.com/in/devsinghindra">
            <LinkedIn style={buttonStyle} />
          </a>
          <a target="_blank" href="https://github.com/devsinghindra">
            <GitHub style={buttonStyle} />
          </a>
          <a target="_blank" href="https://github.com/devsinghindra">
            <Facebook style={buttonStyle} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
