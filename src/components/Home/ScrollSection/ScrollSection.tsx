import { useEffect, useState, useRef } from "react";
import { SideScroll } from "./SideScroll/SideScroll";

export const ScrollSection = () => {
  const cardsContent = [
    "Typescript",
    "React",
    "Next.js",
    "SCSS",
    "TailwindCSS",
  ];
  const [offset, setOffset] = useState(0);
  const skillSquareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const squaresToFitIntoViewport = window.innerWidth / 700;
    const fullSquaresToFit = Math.floor(squaresToFitIntoViewport);
    const offsetOfSquares =
      ((squaresToFitIntoViewport - fullSquaresToFit) *
        (skillSquareRef?.current?.offsetWidth || 700)) /
      2;
    setOffset(offsetOfSquares);
  }, []);

  return (
    <>
      <SideScroll offset={offset}>
        {cardsContent.map((text, index) => (
          <div
            ref={skillSquareRef}
            key={index}
            className="before: grid h-[40vh] w-[700px] max-w-[80vw] skew-y-[0deg] animate-cardSkew place-items-center rounded-xl border-[3px] border-solid border-[#bbb] bg-cards-dark-purple bg-cover bg-no-repeat shadow-own-shadow shadow-scrolledItems"
          >
            <p className="text-center font-fira text-2xl font-bold md:text-5xl">
              {text}
            </p>
          </div>
        ))}
      </SideScroll>
    </>
  );
};
