import React from "react";
import ProjectCard from "../Card/ProjectCard";
import images from "../../images";
import { profilePic } from "../../images";
import styles from "./Home.module.css";


function Home() {

  return (
    <div className={styles.Container}>
      <div className={styles.Bio}>
        <div className={styles.Intro}>
          <h1>Hi, I'm Devendra.</h1>
          <p>
            Currently pursuing B.Tech in Computer Science & Engineering at NIT Patna.
        </p>
        </div>
        <div className={styles.Over}>
          <img src={profilePic} alt="profile" />
        </div>
      </div>
      <div className={styles.Featured}>
        <h1>Featured Projects</h1>
        <ProjectCard link={images[2].link} title={images[2].title} description={images[2].description} src={images[2].src} />
        <ProjectCard link={images[7].link} title={images[7].title} description={images[7].description} src={images[7].src} />
      </div>

    </div>
  );
}

export default Home;
