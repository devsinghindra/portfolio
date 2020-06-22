import React from "react";
import { motion } from "framer-motion";
import { profilePic } from "../../images";
import { reactIcon, jsIcon, flutterIcon, dartIcon, mlIcon, pythonIcon, cpIcon, cppIcon, gitIcon, githubIcon } from "../../icons";

import styles from "./About.module.css";


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
        x: "-100vw",
        transition: { ease: 'easeInOut', duration: 1 }
    }
};

function About() {
    return (
        <motion.div className={styles.Container}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className={styles.Heading}>
                <h1>About Me.</h1>
                {/* <h2>Find out who I am, where I'm from and what I'm all about.</h2> */}
            </div>
            <div className={styles.Bio}>
                <div className={styles.Intro}>
                    <h1>Who am I?</h1>
                    <p>
                        I am Devendra Singh.
                        Future Software Engineer, Web developer.
                        People call me Dev. I like to call myself devsinghindra <span role="img" aria-label="emoji">😅😅</span>.
                        I am avid learner who like to learn new framework and tools.
                        I like to travel and play video games alot.
                        I am currently pursuing B.Tech from NIT Patna in Computer Science and Engineering.
                   </p>
                </div>
                <div className={styles.Over}>
                    <img src={profilePic} alt="profile" />
                </div>
                <div className={styles.Education}>
                    <div className={styles.Title}>
                        <h1>Educational Background :</h1>
                    </div>
                    <ul>
                        <li className={styles.Title}><h3>High School</h3></li>
                        <div className={styles.School}>
                            <span>International Hindu School (CBSE)</span>
                            <span>CGPA : 9.4</span>
                            <span>2012-2014</span>
                        </div>
                        <li className={styles.Title}><h3>Intermediate</h3></li>
                        <div className={styles.School}>
                            <span>International Hindu School (CBSE)</span>
                            <span>Percentage: 88.2%</span>
                            <span>2014-2016</span>
                        </div>
                        <li className={styles.Title}><h3>Bachelor of Technology</h3></li>
                        <div className={styles.School}>
                            <span>National Institute of Technology</span>
                            <span>CGPA : 7.4</span>
                            <span>2017-2021</span>
                        </div>
                    </ul>
                </div>
                <div className={styles.Skills}>
                    <div className={styles.Title}>
                        <h1>Skills : </h1>
                    </div>
                    <div className={styles.Box}>
                        <Skill src={reactIcon} title="React" />
                        <Skill src={flutterIcon} title="Flutter" />
                        <Skill src={mlIcon} title="Machine Learning" />
                        <Skill src={cpIcon} title="Algorithms" />
                    </div>
                </div>
                <div className={styles.Languages}>
                    <div className={styles.Title}>
                        <h1>Programming Languages : </h1>
                    </div>
                    <div className={styles.Box}>
                        <Skill src={jsIcon} title="JavaScript" />
                        <Skill src={dartIcon} title="Dart" />
                        <Skill src={pythonIcon} title="Pyhton" />
                        <Skill src={cppIcon} title="C++" />
                    </div>
                </div>
                <div className={styles.Other}>
                    <div className={styles.Title}>
                        <h1 >Other : </h1>
                    </div>
                    <div className={styles.Box}>
                        <Skill src={gitIcon} title="Git" />
                        <Skill src={githubIcon} title="GitHub" />
                    </div>
                </div>
            </div>

        </motion.div>
    );
}

function Skill(props) {
    return (
        <div className={styles.Skill}>
            <motion.img src={props.src} alt=""
                whileHover={{ scale: 1.2 }} />
            <h1>{props.title}</h1>
        </div>
    );
}

export default About;
