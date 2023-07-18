import React from "react";
import styles from "./CardEmployee.module.scss";
import PhotoUser from "../PhotoUser/PhotoUser";
import UserRow from "../UserRow/UserRow";
import { Link } from "react-router-dom";
import cn from "classnames";
import { useSpring, animated } from "react-spring";
const trans = (x, y, s) =>
  `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${1})`;

const calc = (x, y) => {
  const BUFFER = 50;

  const why = -(y - window.innerHeight / 2) / BUFFER;

  console.log("why", why);
  console.log("y", y);
  return [-(y / 50), x / 50, 1.1];
};
const CardEmployee = ({ id, name, salary, age, image, action }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <animated.div
      className={styles.card__wrapper}
      onMouseMove={(e) => {
        const { clientX: x, clientY: y } = e;

        return set({ xys: calc(x, y) });
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <Link
        to={`/employee/${id}`}
        className={cn(styles.card, "card")}
        onClick={() =>
          action({
            employee_name: name,
            employee_salary: salary,
            employee_age: age,
            profile_image: image,
          })
        }
      >
        <PhotoUser image={image} name={name} />
        <div className={styles.card__name}>
          {name}, {age}
        </div>
        <UserRow label={"Salary"} value={"$" + salary} />
      </Link>
    </animated.div>
  );
};

export default CardEmployee;
