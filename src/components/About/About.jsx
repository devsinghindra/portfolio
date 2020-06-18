import React from "react";
import { profilePic } from "../../images";
import styles from "./About.module.css";

function About() {
    return (
        <div className={styles.Container}>
            <div className={styles.Heading}>
                <h1>About Me.</h1>
                <h2>Find out who I am, where I'm from and what I'm all about.</h2>
            </div>
            <div className={styles.Bio}>
                <div className={styles.Intro}>
                    <h1>Who am I?</h1>
                    <p>
                        I am Devendra Singh. I am avid learner like to learn new technological things.
                        Like I wanted to learn React framework for front-end development. Thus making this
                        portfoilio site in react itself. I am currently pursuing B.Tech from NIT Patna in Computer
                        Science and Engineering.
                        Future Software Engineer, web developer.
                   </p>
                </div>
                <div className={styles.Over}>
                    <img src={profilePic} alt="profile" />
                </div>
            </div>
        </div>
    );
}

export default About;
