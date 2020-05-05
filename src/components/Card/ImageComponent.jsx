import React from "react";
import styles from "./ImageComponent.module.css";
import { useState } from "react";
import ReactModel from "react-modal";

function ImageComponent(props) {
  const [open, setOpen] = useState(false);

  function handleShowDialog() {
    setOpen(!open);
    console.log("cliked");
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.small}
        src={props.src}
        onClick={handleShowDialog}
        alt="project"
      />
      {open && (
        <ReactModel
          className={styles.modal}
          isOpen={open}
          onClick={handleShowDialog}
          overlayClassName={styles.Overlay}
        >
          <img
            className={styles.large}
            src={props.src}
            onClick={handleShowDialog}
            alt="projec"
          />
        </ReactModel>
      )}
    </div>
  );
}

export default ImageComponent;
