import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { AboutBannerBackground } from "./AboutBannerBackground";
import { BlobAvatar } from "./BlobAvatar/BlobAvatar";

export const AboutBanner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true });

  const factsArray = [
    { id: 1, text: "I love creating new things" },
    { id: 2, text: "IT enthusiast" },
    { id: 3, text: "I'm a pedant " },
    { id: 4, text: "I am always open to new experiences" },
    { id: 5, text: "Check out the rest below." },
  ];

  return (
    <>
      <section
        className="relative flex  h-[calc(calc(var(--vh)_*_100)_-_60px)] flex-col items-center justify-center gap-4 overflow-x-hidden text-center font-fira md:justify-between"
        ref={sectionRef}
      >
        <AboutBannerBackground />

        <div className="flex min-h-[40vh] w-full flex-col  items-center justify-around gap-12 md:flex-row">
          <div
            className="flex flex-col gap-2 "
            style={{
              transform: isSectionInView ? "none" : "translateX(200px)",
              opacity: isSectionInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1.1s",
            }}
          >
            {factsArray.map((item) => {
              return (
                <p key={item.id} className="text-lg font-medium md:text-xl">
                  {item.text}
                </p>
              );
            })}
          </div>
          <BlobAvatar />
        </div>
      </section>
      <div className="relative h-[calc(calc(var(--vh)_*_100)_-_60px)] ">
        <AboutBannerBackground reverse />
      </div>
    </>
  );
};
