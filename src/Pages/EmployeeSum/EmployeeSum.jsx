import React, { useState, useEffect } from "react";
import styles from "./EmployeeSum.module.scss";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { totalSum } from "../../helpers/totalSum";
import { useSpring, animated } from "react-spring";
import Slider from "../../Components/Slider/Slider";
import {Button} from "../../Components/Button/Button";
import {useNavigate} from "react-router-dom";

const EmployeeSum = ({ employers }) => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  function AnimatedNumber({ number }) {
    const props = useSpring({ number, from: { number: 0 } });

    return (
      <animated.span>
        {props.number.to((value) => Math.floor(value))}
      </animated.span>
    );
  }

  useEffect(() => {
    if (!employers) {
      setTotal(0);
    } else {
      const sum = totalSum(employers);
      setTotal(sum);
    }
  }, [employers]);
  return (
    <section className={styles.sum}>
      <div className="container">
        <SectionTitle text={"Total salary of all employees"} />
        <div className={styles.sum__total}>
          $<AnimatedNumber className={styles.sum__total} number={total} />
        </div>
        {total === 0 && (
          <div className={styles.sum__total_note}>
            * We can't honor the total amount of money when we haven't received
            the data
          </div>
        )}
        <Slider />
        <div className={styles.sum__footer}>
          <Button
              width="130px"
              text="Go back"
              action={() => navigate(-1)}
          />
        </div>
      </div>
    </section>
  );
};

export default EmployeeSum;
