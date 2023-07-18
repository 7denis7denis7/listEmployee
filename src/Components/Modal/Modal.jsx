import React, { useEffect } from "react";
import styles from "./Modal.module.scss";
import { Button } from "../Button/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Modal = ({ action, text = "Something went wrong, try again later" }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.modal}>
      <div
        className={styles.modal__inner}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h3 className={styles.modal__title}>Ooops!</h3>
        <div className={styles.modal__description}>{text}</div>
        <div className={styles.modal__button}>
          <Button text="Close" width="309px" action={action} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
