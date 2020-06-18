import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard(props) {

    const flutterStyle = (props.src.includes("librarian") || props.src.includes("flutter")) ? styles.Flutter : "";


    return (
        <div className={styles.Project}>
            <div className={`${styles.PrOver} ${flutterStyle}`}>
                <a target="_blank" rel="noopener noreferrer" href={props.link}><img src={props.src} alt="" /></a>
            </div>
            <div className={styles.Desc}>
                <h1>{props.title}</h1>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    );
}

export default ProjectCard;