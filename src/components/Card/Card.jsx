import React from "react";
import styles from "./Card.module.css";
import ImageComponent from "./ImageComponent";

function Card(props) {
  return (
    <div className={styles.container}>
      {/* <img src={props.src} alt="project" /> */}
      <ImageComponent src={props.src} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
