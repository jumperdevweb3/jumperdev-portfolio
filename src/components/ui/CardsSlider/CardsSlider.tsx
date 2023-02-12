import { ReactNode, useRef } from "react";
import { SliderButtons } from "./SliderButtons/SliderButtons";

export const CardsSlider = ({ children }: { children: ReactNode }) => {
  const sliderBoxRef = useRef<HTMLDivElement>(null);

  const scrollHandler = (direction: "left" | "right") => {
    const width = 300;
    if (typeof width !== "undefined" && sliderBoxRef.current !== null) {
      const scrollIncrease = sliderBoxRef.current.scrollLeft + width;
      const scrollDecrease = sliderBoxRef.current.scrollLeft - width;
      const scrollDirection =
        direction === "left" ? scrollDecrease : scrollIncrease;
      sliderBoxRef.current.scrollLeft = scrollDirection;
    }
  };

  return (
    <>
      <div
        className={`relative flex h-[350px] w-[350px] items-center gap-12 overflow-x-hidden scroll-smooth px-8`}
        ref={sliderBoxRef}
      >
        {children}
      </div>
      <SliderButtons scrollHandler={scrollHandler} />
    </>
  );
};
