import { CardsSlider } from "@/ui/CardsSlider/CardsSlider";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useWindowSize } from "src/hooks/use-windowSize";
import { factsArray } from "../factsArray";
import { FactCard } from "./FactCard/FactCard";

export const FactsList = () => {
  const factsBoxRef = useRef<HTMLDivElement>(null);
  const isFactBoxInView = useInView(factsBoxRef, { once: true });
  const { width } = useWindowSize();
  const mobile = width <= 1023 && width !== 0;

  const factsListRender = factsArray.map((item, index) => {
    const desktopAnimationStyles = !mobile
      ? {
          transform: isFactBoxInView
            ? "none"
            : `translateY(${index % 2 == 0 ? "200px" : "-200px"})`,
          opacity: isFactBoxInView ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }
      : undefined;
    return (
      <FactCard key={item.id} animations={desktopAnimationStyles} item={item} />
    );
  });

  return (
    <div
      className="relative flex w-full max-w-[95%] justify-center"
      ref={factsBoxRef}
    >
      {mobile && <CardsSlider>{factsListRender}</CardsSlider>}
      {!mobile && (
        <div className="flex flex-wrap items-center justify-center gap-12 px-4 text-base font-bold md:gap-14">
          {factsListRender}
        </div>
      )}
    </div>
  );
};
