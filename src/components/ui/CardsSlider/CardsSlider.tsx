import { useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import { SliderButtons } from "./SliderButtons/SliderButtons";

export const CardsSlider = ({ children }: { children: ReactNode }) => {
  const sliderBoxRef = useRef<HTMLDivElement>(null);
  const isSiderInView = useInView(sliderBoxRef, { once: true });

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
        style={{
          transform: isSiderInView ? "none" : `translateX(200px)`,
          opacity: isSiderInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        {children}
      </div>
      <SliderButtons scrollHandler={scrollHandler} />
    </>
  );
};
