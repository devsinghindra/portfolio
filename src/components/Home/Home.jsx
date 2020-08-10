import React from "react";
import { motion } from "framer-motion";

import ProjectCard from "../Card/ProjectCard/ProjectCard";
import images from "../../images";
import { profilePic } from "../../images";
import styles from "./Home.module.css";

const containerVariants = {
  hidden: {
    opacity: 0.9
  },
  visible: {
    opacity: 1,
    type: "tween",
    transitio: {
      duration: 1
    }
  },
  exit: {
    x: "-100vw",
    transition: { ease: 'easeInOut', duration: 1 }
  }
};

function Home() {

  return (
    <motion.div className={styles.Container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={styles.Bio}>
        <motion.div className={styles.Intro}
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1>Hi, I'm Devendra.</h1>
          <p>
            Currently pursuing B.Tech in Computer Science & Engineering at NIT Patna.
        </p>
        </motion.div>
        <motion.div className={styles.Over}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <img src={profilePic} alt="profile" />
        </motion.div>
      </div>
      <div className={styles.Featured}>
        <h1>Featured Projects</h1>
        <ProjectCard link={images[0].link} title={images[0].title} description={images[0].description} src={images[0].src} info={images[0]}/>
        <ProjectCard link={images[images.length - 1].link} title={images[images.length - 1].title} description={images[images.length - 1].description} src={images[images.length - 1].src} info={images[images.length - 1]} />
      </div>

    </motion.div>
  );
}

export default Home;
