import React from "react";
import styles from "./UserRow.module.scss";

const UserRow = ({ label, value }) => {
  return (
    <div className={styles.row}>
      <div className={styles.row__label}>{label}:</div>
      <div className={styles.row__value}>{value}</div>
    </div>
  );
};

export default UserRow;
