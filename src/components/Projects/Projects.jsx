import React from "react";
import styles from "./Projects.module.css";
import Card from "../Card/Card";

import images from "../../images";

function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Some Projects made by me.</h1>
      <div className={styles.card}>
        {images.map((img, index) => {
          return (
            <Card
              key={img.id}
              src={img.src}
              title={img.title}
              description={img.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
