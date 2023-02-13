import { ReactNode, useRef } from "react";
import { SliderButtons } from "./SliderButtons/SliderButtons";

export const CardsSlider = ({ children }: { children: ReactNode }) => {
  const sliderBoxRef = useRef<HTMLDivElement>(null);

  const scrollHandler = (direction: "left" | "right") => {
    const width = 313;
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
        className={`relative flex h-[315px] w-[265px] gap-12 overflow-x-hidden scroll-smooth`}
        ref={sliderBoxRef}
      >
        {children}
      </div>
      <SliderButtons scrollHandler={scrollHandler} />
    </>
  );
};
