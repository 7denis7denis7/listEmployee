import React from "react";
import styles from "./Input.module.scss";

const Input = ({ value, action, placeholder, type = "text" }) => {
  const handleInput = (e) => {
    const value = e.target.value;
    if (action) {
      action(value);
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={handleInput}
      value={value || ""}
      className={styles.input}
    />
  );
};

export default Input;
