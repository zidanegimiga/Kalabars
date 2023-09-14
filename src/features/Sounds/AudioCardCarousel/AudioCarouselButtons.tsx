import Button from "shared/Button"
import styles from "./AudioCardCarousel.module.scss"
interface AudioCardCarouselButtonsProps {
  disableLeftScroll: boolean
  setScrollLeft: () => void
  disableRightScroll: boolean
  setScrollRight: () => void
}
const scrollButtonCSS =
  'w-8 h-8 min-h-0 p-4 rounded-full disabled:!bg-penta-primary-vision-purple/60 disabled:!text-penta-supplement-white '

export const AudioCardCarouselButtons = ({
  disableLeftScroll,
  setScrollLeft,
  disableRightScroll,
  setScrollRight,
}: AudioCardCarouselButtonsProps) => {
  return (
    <div className={styles.carouselBtnHug}>
      <div className={styles.carouselBtnHugText}>
        {" "}
        Navigate carousel <b>-&gt;</b>
      </div>
      <div>
        <button
          onClick={setScrollLeft}
          className={styles.carouselBtn}
          disabled={disableLeftScroll}
        >
          &lt;
        </button>
        <button
          onClick={setScrollRight}
          className={styles.carouselBtn}
          disabled={disableRightScroll}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default AudioCardCarouselButtons
