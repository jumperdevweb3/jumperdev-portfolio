import { useEffect, useState, useRef } from "react";
import { SideScroll } from "../SideScroll/SideScroll";

export const ScrollSection = () => {
  const cardsContent = [
    "Typescript",
    "React",
    "Next.js",
    "SCSS",
    "TailwindCSS",
  ];
  const [offset, setOffset] = useState(0);
  const promoSquareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const countOfSquaresThatWillFitIntoViewport = window.innerWidth / 700;
    const fullSquaresThatWillFit = Math.floor(
      countOfSquaresThatWillFitIntoViewport
    );
    const offsetOfSquares =
      ((countOfSquaresThatWillFitIntoViewport - fullSquaresThatWillFit) *
        (promoSquareRef?.current?.offsetWidth || 700)) /
      2;
    setOffset(offsetOfSquares);
  }, []);

  return (
    <>
      <SideScroll offset={offset}>
        {cardsContent.map((text, index) => (
          <div
            ref={promoSquareRef}
            key={index}
            className="before: grid h-[40vh] w-[700px] max-w-[80vw] skew-y-[0deg] animate-cardSkew place-items-center rounded-xl border-[3px] border-solid border-[#bbb] bg-cards-dark-purple bg-cover bg-no-repeat shadow-own-shadow shadow-scrolledItems"
          >
            <p className="text-center text-2xl font-bold md:text-5xl ">
              {text}
            </p>
          </div>
        ))}
      </SideScroll>
    </>
  );
};
