import Button from "shared/Button"

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
    <div className="flex gap-4 mx-7">
      {/* <Button
        tooltipPosition="bottom"
        iconDescription="zurück"
        disabled={disableLeftScroll}
        hasIconOnly
        renderIcon={ArrowLeft16}
        onClick={setScrollLeft}
        className={scrollButtonCSS}
      />
      <Button
        tooltipPosition="bottom"
        disabled={disableRightScroll}
        iconDescription="weiter"
        hasIconOnly
        renderIcon={ArrowRight16}
        onClick={setScrollRight}
        className={scrollButtonCSS}
      /> */}
      <Button fill="red" action={setScrollLeft} text="<" />
      <Button fill="red" action={setScrollRight} text="<" />
    </div>
  )
}

export default AudioCardCarouselButtons
