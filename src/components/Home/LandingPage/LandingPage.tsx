import { useEffect, useState, useRef } from "react";
import { SideScroll } from "../SideScroll/SideScroll";

export const LandingPage = () => {
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
        {["Best dev in the world", "React", "SCSS", "Next.js"].map(
          (text, index) => (
            <div
              ref={promoSquareRef}
              style={{
                display: "grid",
                placeItems: "center",
                border: "2px solid white",
                borderRadius: "0.5rem",
                fontWeight: "bold",
                fontSize: "3.5rem",
                textAlign: "center",
                backgroundImage: "url(/image2.png)",
              }}
              key={index}
              className="grid place-items-center border-[2px]"
            >
              {text}
            </div>
          )
        )}
      </SideScroll>
    </>
  );
};
