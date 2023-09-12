import useResizeObserver from "@react-hook/resize-observer";
import { useCallback, useRef, useState } from "react";
import AudioCardCarouselButtons from "./AudioCarouselButtons";

const SCROLL_AMOUNT = 390;

const calculateMaxScrollWidth = (ref: React.RefObject<HTMLDivElement>) => {
  const containerVisibleWidth = ref.current?.clientWidth;
  const containerTotalWidth = ref.current?.scrollWidth;
  return (containerTotalWidth ?? 1) - (containerVisibleWidth ?? 0);
};

export const AudioCardCarousel = (props: React.PropsWithChildren<{}>) => {
  const [scroll, setScroll] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const measuresContainer = useRef<HTMLDivElement>(null);

  const [maxScrollableWidth, setMaxScrollableWidth] = useState(1);
  useResizeObserver(measuresContainer, () => {
    const updatedScrollableWidth = calculateMaxScrollWidth(measuresContainer);
    const newScrollPosition =
      Math.min(scroll / maxScrollableWidth, 1) * updatedScrollableWidth;
    setScroll(newScrollPosition);
    if (measuresContainer.current)
      measuresContainer.current.scrollLeft = newScrollPosition;
    setMaxScrollableWidth(updatedScrollableWidth);
  });

  const updateScroll = useCallback(
    (amount: number) =>
      setScroll((oldScrollValue) => {
        let newScrollValue = oldScrollValue + amount;
        if (newScrollValue < 0) newScrollValue = 0;
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

  const carouselHeading = "";
  return (
    <div className="pb-6 mt-8 bg-ui-background pt-7">
      <h2 className="text-2xl font-medium leading-5 ml-7">{}</h2>
      <div
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        ref={measuresContainer}
        className={
          "flex flex-row overflow-hidden gap-x-7  px-7 bg-ui-background scroll-smooth " +
          (isDragging ? "cursor-grabbing" : "cursor-grab")
        }
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
