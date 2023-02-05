import { InteractiveCardWrapper } from "@/ui/InteractiveCardWrapper/InteractiveCardWrapper";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "src/hooks/use-windowSize";

import { BlobAvatar } from "./AboutBanner/BlobAvatar/BlobAvatar";

export const About = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const isBlobInView = useInView(blobRef, { once: true });
  const factsBoxRef = useRef<HTMLDivElement>(null);
  const isFactBoxInView = useInView(factsBoxRef, { once: true });
  const { width } = useWindowSize();
  const mobile = width <= 1023 && width !== 0;

  const factsArray = [
    {
      id: 1,
      text: "A highly motivated and creative individual, with a passion for front-end development and web3 technology.",
    },
    {
      id: 2,
      text: "With a strong focus on creating new and innovative solutions.",
    },
    {
      id: 3,
      text: "In my free time, i enjoy reading books to further my knowledge and engage in personal development to continuously grow and improve my skills.",
    },
    {
      id: 4,
      text: "With a love for problem-solving and a commitment to excellence",
    },
  ];
  return (
    <>
      <div className="mt-[2rem] flex flex-col items-center gap-12 bg-purple-radial lg:mt-0 lg:min-h-[60vh] lg:justify-center lg:gap-20">
        <div
          ref={blobRef}
          style={{
            transform: isBlobInView ? "none" : "translateY(200px)",
            opacity: isBlobInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <BlobAvatar />
        </div>
        <div
          className="md:min-h-auto grid w-full grid-cols-facts-sm items-center justify-center gap-12 px-4 text-base font-bold md:grid-cols-facts-md md:gap-14 lg:grid-cols-facts-lg"
          ref={factsBoxRef}
        >
          {factsArray.map((item, index) => {
            return (
              <div
                className={`relative flex h-[250px] items-center border-[2px] bg-linearPurpleBack p-4 md:h-[300px] lg:h-[350px]`}
                key={item.id}
                style={
                  !mobile
                    ? {
                        transform: isFactBoxInView
                          ? "none"
                          : `translateY(${
                              index % 2 == 0 ? "200px" : "-200px"
                            })`,
                        opacity: isFactBoxInView ? 1 : 0,
                        transition:
                          "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                      }
                    : undefined
                }
              >
                <p className="text-center font-fira text-base md:text-lg lg:text-xl">
                  {item.text}
                </p>
                <div className="absolute -bottom-[15px] -left-[15px] -z-[50] h-full w-full border-[2px] bg-transparent "></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
