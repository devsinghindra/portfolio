import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard(props) {

    return (
        <div className={styles.Project}>
            <div className={styles.PrOver}>
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