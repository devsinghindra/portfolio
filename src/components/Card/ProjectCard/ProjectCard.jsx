import React from "react";
import { motion } from "framer-motion";

import styles from "./ProjectCard.module.css";

function ProjectCard(props) {

    const flutterStyle = (props.src.includes("librarian") || props.src.includes("flutter")) ? styles.Flutter : "";


    return (
        <div className={styles.Project}>
            <motion.div

                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5 }}
                className={`${styles.PrOver} ${flutterStyle}`}>
                <a target="_blank" rel="noopener noreferrer" href={props.link}><img src={props.src} alt="" /></a>
            </motion.div>
            <motion.div
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5 }}
                className={styles.Desc}>
                <h1>{props.title}</h1>
                <p>
                    {props.description}
                </p>
            </motion.div>
        </div>
    );
}

export default ProjectCard;