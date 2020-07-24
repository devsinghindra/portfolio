import React from "react";
import { motion } from "framer-motion";

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
          <Mail style={linkStyle} className={styles.link} />
          <motion.a target="_blank" rel="noopener noreferrer" href="mailto:devsinghindra@gmail.com"
            whileHover={{ scale: 1.1 }}
          >
            devsinghindra@gmail.com
          </motion.a>
        </div>
        <div className={styles.Element}>
          <LinkedIn style={linkStyle} className={styles.link} />
          <motion.a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/devsinghindra"
            whileHover={{ scale: 1.1 }}
          >
            On LinkedIn.
          </motion.a>
        </div>
        <div className={styles.Element}>
          <GitHub style={linkStyle} className={styles.link} />
          <motion.a target="_blank" rel="noopener noreferrer" href="https://github.com/devsinghindra"
            whileHover={{ scale: 1.1 }}
          >
            On Github.
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
