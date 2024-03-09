import { useEffect, useState } from "react";
import styles from "./ImageSlider.module.css";
import { imagesData } from "../data/imagesData.ts";
import ImageSliderBtn from "./ImageSliderBtn.tsx";

const TIMER_SLIDE = 5000;
const ImagesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : imagesData.length - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < imagesData.length - 1 ? prevIndex + 1 : 0,
    );
  };

  useEffect(() => {
    let timer: number;
    if (autoPlay) {
      timer = setInterval(() => {
        goToNext();
      }, TIMER_SLIDE);
    }

    return () => clearInterval(timer);
  }, [autoPlay, currentIndex]);

  return (
    <div className={styles.slider_container}>
      {imagesData.map((item, index) => (
        <div
          className={`${styles.image} ${
            index === currentIndex ? styles.image_visible : ""
          }`}
          key={item.title}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div
            className={`${styles.title} ${
              index === currentIndex ? styles.title_in : styles.title_out
            }`}
          >
            {item.title}
          </div>
        </div>
      ))}

      <ImageSliderBtn
        goToNext={goToNext}
        goToPrevious={goToPrevious}
        setAutoPlay={setAutoPlay}
        autoPlay={autoPlay}
      />

      <div className={styles.total}>
        {currentIndex + 1} / {imagesData.length}
      </div>
    </div>
  );
};

export default ImagesSlider;
