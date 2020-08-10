import React from "react";
import { motion } from "framer-motion";

import styles from "./Projects.module.css";
import ProjectCard from "../Card/ProjectCard/ProjectCard";
import images from "../../images";


const containerVariants = {
  hidden: {
    opacity: 0.9,
  },
  visible: {
    opacity: 1,
    type: "tween",
    transition: { duration: 2 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut', duration: 1 }
  }
};

function Projects() {
  return (
    <motion.div className={styles.Container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
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
              info={img}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
