import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.bg}>
      <h1 className={styles.title}>Hello there, my friend!.</h1>
      <h1 className={styles.title}>Welcome to my portfolio website.</h1>
      <h1 className={styles.title}>I am Devendra Singh.</h1>
      <h1 className={styles.title}>(aka. devsinghindra)</h1>
      <p className={styles.content}>
        Currently pursuing B.Tech in Computer Science & Engineering at NIT
        Patna.
      </p>
    </div>
  );
}

export default Home;
