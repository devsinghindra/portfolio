import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../Card/ProjectCard";
import images from "../../images";

function Projects() {
  return (
    <div className={styles.Container}>
      <div className={styles.Heading}>
        <h1>My Projects.</h1>
      </div>
      <div className={styles.Card}>
        {images.map((img, index) => {
          return (
            <ProjectCard
              key={img.id}
              src={img.src}
              title={img.title}
              link={img.link}
              description={img.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
