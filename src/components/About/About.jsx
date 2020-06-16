import React from "react";
import { profilePic } from "../../images";
import styles from "./About.module.css";

function About() {
    return (
        <div className={styles.Container}>
            <img src={profilePic} alt="profile" />
            <h1>
                I am Devendra Singh. Future Software Engineer, web developer.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quasi rem soluta amet tempore quidem ducimus esse, optio ex voluptate corrupti at natus laboriosam quibusdam consectetur quo fugiat! Perspiciatis, dolor.
            </h1>
        </div>
    );
}

export default About;
