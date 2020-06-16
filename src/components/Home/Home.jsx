import React from "react";
import { LinkedIn, GitHub, Facebook, Mail } from "@material-ui/icons";
import ProjectCard from "../Card/ProjectCard";
import images from "../../images";
import { profilePic } from "../../images";
import styles from "./Home.module.css";


function Home() {

  const linkStyle = {
    color: 'white',
    height: '3rem',
    width: '3rem',
    margin: '5px 10px'
  };


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
        <ProjectCard link={images[0].link} title={images[0].title} description={images[0].description} src={images[0].src} />
      </div>
      <div className={styles.Touch}>
        <div className={styles.Intro}>
          <h1>Love programming as much as I do?</h1>
          <p> Let's make something bigger together.</p>
        </div>
        <div className={styles.Links}>
          <div className={styles.Element}>
            <Mail style={linkStyle} />
            <a target="_blank" rel="noopener noreferrer" href="mailto:devsinghindra@gmail.com">
              DEVSINGHINDRA@GMAIL.COM
          </a>
          </div>
          <div className={styles.Element}>
            <LinkedIn style={linkStyle} />
            <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/devsinghindra">
              On LinkedIn.
          </a>
          </div>
          <div className={styles.Element}>
            <GitHub style={linkStyle} />
            <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/devsinghindra">
              On Github.
          </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
