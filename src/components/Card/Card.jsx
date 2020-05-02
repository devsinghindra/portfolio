import React from "react";
import styles from "./Card.module.css";

import proPic from "../../images/dreamPro.jpg";

function Card(props) {
  return (
    <div className={styles.container}>
      <img src={proPic} alt="profile" />
      {/* <div className={styles.content}> */}
      <h2>Title</h2>
      <p>
        Contennt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
        sapiente in iure consectetur earum ullam harum eum! Molestiae odit
        dolorem repellat in, quia obcaecati illum hic atque pariatur dolores
        autem?
      </p>
      {/* </div> */}
    </div>
  );
}

export default Card;
