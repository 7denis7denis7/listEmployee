import React from "react";
import styles from "./Button.module.scss";

export const Button = ({ text = "Ok", width = "auto", action }) => {
  return (
    <button className={styles.button} style={{ width: width }} onClick={action}>
      {text}
    </button>
  );
};

export const ButtonBack = ({ text = "Ok", width = "auto", action }) => {
  return (
    <button
      className={styles.button__back}
      style={{ width: width }}
      onClick={action}
    >
      <span>{text}</span>
    </button>
  );
};
