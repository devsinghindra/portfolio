import React from "react";
import styles from "./Projects.module.css";
import Card from "../Card/Card";

function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Some Projects made by me.</h1>
      <div className={styles.card}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Projects;
