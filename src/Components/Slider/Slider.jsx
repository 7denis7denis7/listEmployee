import React from "react";
import styles from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import image1 from "../../images/img/city1.jpg";
import image2 from "../../images/img/city2.jpeg";
import image3 from "../../images/img/city3.jpg";
import image4 from "../../images/img/city4.jpeg";
import image5 from "../../images/img/city5.jpeg";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{ delay: 1000 }}
        speed={1000}
        loop={true}
        modules={[EffectFade, Autoplay]}
        className={styles.slider__swiper}
      >
        <SwiperSlide>
          <img src={image1} alt="city1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="city2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="city3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="city4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="city5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
