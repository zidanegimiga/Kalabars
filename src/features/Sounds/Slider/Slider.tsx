import { useState, useRef, useEffect } from "react";
import styles from './Slider.module.scss'

function Slider({ percentage = 0, onChange }) {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const rangeRef = useRef(null);
  const thumbRef = useRef(null);

  useEffect(() => {
    const rangeWidth = rangeRef?.current.getBoundingClientRect().width;
    const thumbWidth = thumbRef?.current.getBoundingClientRect().width;
    const centerThumb = (thumbWidth / 100) * percentage * -1;
    const centerProgressBar =
      thumbWidth +
      (rangeWidth / 100) * percentage -
      (thumbWidth / 100) * percentage;
    setPosition(percentage);
    setMarginLeft(centerThumb);
    setProgressBarWidth(centerProgressBar);
  }, [percentage]);

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.progressBarCover}
        style={{
          width: `${progressBarWidth}px`,
        }}
      ></div>
      <div
        className={styles.thumb}
        ref={thumbRef}
        style={{
          left: `${position}%`,
          marginLeft: `${marginLeft}px`,
        }}
      ></div>
      <input
        type="range"
        value={position}
        ref={rangeRef}
        step="0.01"
        className={styles.range}
        onChange={onChange}
      />
    </div>
  );
}

export default Slider;
