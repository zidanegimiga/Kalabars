import useResizeObserver from "@react-hook/resize-observer";
import { useCallback, useEffect, useRef, useState } from "react";
import AudioCardCarouselButtons from "./AudioCarouselButtons";
import styles from "./AudioCardCarousel.module.scss";

const SCROLL_AMOUNT = 390;

const calculateMaxScrollWidth = (ref: React.RefObject<HTMLDivElement>) => {
  const containerVisibleWidth = ref.current?.clientWidth;
  const containerTotalWidth = ref.current?.scrollWidth;
  return (containerTotalWidth ?? 1) - (containerVisibleWidth ?? 0);
};

export const AudioCardCarousel = (props: React.PropsWithChildren<{}>) => {
  const [scroll, setScroll] = useState(0);
  console.log(scroll);
  const [isDragging, setIsDragging] = useState(false);

  const measuresContainer = useRef<HTMLDivElement>(null);

  const maxScrollableWidth = calculateMaxScrollWidth(measuresContainer);
  //   useResizeObserver(measuresContainer, () => {
  //     const updatedScrollableWidth = calculateMaxScrollWidth(measuresContainer);

  //     const newScrollPosition =
  //       Math.min(scroll / maxScrollableWidth, 1) * updatedScrollableWidth;
  //     setScroll(newScrollPosition);
  //     if (measuresContainer.current)
  //       measuresContainer.current.scrollLeft = newScrollPosition;
  //     setMaxScrollableWidth(updatedScrollableWidth);
  //   });

  const updateScroll = useCallback(
    (amount: number) =>
      setScroll((oldScrollValue) => {
        console.log(oldScrollValue);

        let newScrollValue = oldScrollValue + amount;
        if (newScrollValue < 0) newScrollValue = 0;
        console.log(maxScrollableWidth);
        console.log(newScrollValue);
        if (newScrollValue > maxScrollableWidth)
          newScrollValue = maxScrollableWidth;
        if (measuresContainer.current) {
          measuresContainer.current.scrollLeft = newScrollValue;
        }
        return newScrollValue;
      }),
    [maxScrollableWidth]
  );

  const disableLeftScrollButton = scroll <= 0;
  const disableRightScrollButton = scroll >= maxScrollableWidth;

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!isDragging) return;
    updateScroll(-e.movementX);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  useEffect(() => {
    console.log(scroll);
  }, []);

  const carouselHeading = "";
  return (
    <div>
      {/* <h2 className="text-2xl font-medium leading-5 ml-7">{}</h2> */}
      <div
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        ref={measuresContainer}
        // className={
        //   "flex flex-row overflow-hidden gap-x-7  px-7 bg-ui-background scroll-smooth " +
        //   (isDragging ? "cursor-grabbing" : "cursor-grab")
        // }
        className={styles.carouselHug}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {props.children}
      </div>
      <AudioCardCarouselButtons
        disableLeftScroll={disableLeftScrollButton}
        disableRightScroll={disableRightScrollButton}
        setScrollLeft={() => updateScroll(-SCROLL_AMOUNT)}
        setScrollRight={() => updateScroll(SCROLL_AMOUNT)}
      />
    </div>
  );
};

export default AudioCardCarousel;
