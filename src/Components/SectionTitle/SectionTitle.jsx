import React from "react";
import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ text }) => {
  return <h2 className={styles.title}>{text}</h2>;
};

export default SectionTitle;
