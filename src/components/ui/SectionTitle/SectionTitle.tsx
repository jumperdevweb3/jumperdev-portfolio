import { useInView } from "framer-motion";
import { useRef } from "react";

interface IProps {
  title: string;
  subTitle?: string;
}
export const SectionTitle = ({ title, subTitle }: IProps) => {
  // const sectionTitleRef = useRef<HTMLDivElement>(null);
  // const isInView = useInView(sectionTitleRef, { once: false });
  return (
    <div
      // ref={sectionTitleRef}
      className=" flex flex-col items-center gap-2 bg-transparent text-center  text-[1.7rem]  shadow-own-shadow md:text-4xl lg:text-5xl"
      // style={{
      //   transform: isInView ? "none" : "translateY(200px)",
      //   opacity: isInView ? 1 : 0,
      //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      // }}
    >
      <h2>{title}</h2>
      {subTitle && (
        <span className="text-purple-300 shadow-c-purple text-shadow-lg">
          {subTitle}
        </span>
      )}
    </div>
  );
};