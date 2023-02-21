import { useInView } from "framer-motion";
import { firstJobDuties } from "../jobDutiesList";
import { useRef } from "react";
import { useWindowSize } from "src/hooks/use-windowSize";
import Image from "next/image";
import { stackIcons } from "../jobDutiesList";

export const ExperienceCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isCardInView = useInView(cardRef, { once: true });
  const hashSpan = <span className="text-[#9010B0]">#</span>;
  const sizeOfDiamond = 26;
  const { width } = useWindowSize();
  const mobile = width <= 1023 && width !== 0;

  return (
    <div
      className="relative flex w-[90%] max-w-[900px] flex-col items-center gap-8 rounded-md border-2 border-[#C240FF] bg-linearDarkPurple py-8 font-inter md:px-12"
      ref={cardRef}
      style={{
        transform: isCardInView ? "none" : "translateX(200px)",
        opacity: isCardInView ? 1 : 0,
        transition: "all .7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <h3 className="text-2xl font-bold md:text-4xl">
          Frontend{" "}
          <span className="bg-linearTextDark bg-clip-text text-transparent">
            Developer
          </span>
        </h3>
        <span className="font-open-sans text-2xl font-light">6 months</span>
        {/* <h4 className="font-bold">company.name</h4> */}
        <div className="flex flex-wrap justify-center gap-4 p-4 md:gap-6">
          {stackIcons.map((item) => (
            <div key={item.id} className="h-[46px] w-[46px]">
              <Image
                src={item.src}
                width={64}
                height={64}
                alt="icon"
                className="h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex max-w-[90%] flex-col gap-4 font-fira text-base text-textGray">
        <span className="text-center">Proffesional expirence</span>
        {firstJobDuties.map((item) => (
          <p key={item.id}>
            {hashSpan} {item.text}
          </p>
        ))}
      </div>
      <div
        className={`absolute -top-[14px] -left-[14px] rotate-45 animate-rotateFull border-[2px] border-purple-700 bg-main-dark`}
        style={{
          width: sizeOfDiamond,
          height: sizeOfDiamond,
        }}
      ></div>
      <div
        className={`absolute -bottom-[14px] -right-[14px] rotate-45 animate-rotateFull border-[2px] border-purple-700 bg-main-dark`}
        style={{
          width: sizeOfDiamond,
          height: sizeOfDiamond,
        }}
      ></div>
    </div>
  );
};
