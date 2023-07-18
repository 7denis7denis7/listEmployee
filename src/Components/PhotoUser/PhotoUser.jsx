import React from "react";
import styles from "./PhotoUser.module.scss";
import DefaultUserIcon from "../../images/IconComponents/DefaultUserIcon";

const PhotoUser = ({ image, name, width, height }) => {
  return (
    <div className={styles.photo} style={{ width, height }}>
      {image.length ? (
        <img src={image} alt={name} />
      ) : (
        <DefaultUserIcon color="#2196f3" />
      )}
    </div>
  );
};

export default PhotoUser;
