import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Hello there, my friend!.</h1>
        <h1>Welcome to my portfolio website.</h1>
        <h1>I am Devendra Singh.</h1>
        <h1>(aka. devsinghindra)</h1>
      </div>
      <p className={styles.content}>
        Currently pursuing B.Tech in Computer Science & Engineering at NIT
        Patna.
      </p>
    </div>
  );
}

export default Home;
