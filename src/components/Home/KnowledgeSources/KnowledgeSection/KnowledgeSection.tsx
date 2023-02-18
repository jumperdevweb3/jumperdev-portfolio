import { useInView } from "framer-motion";
import { useRef } from "react";
import { KnowledgeItemsList } from "./ExperienceItemsList/KnowledgeItemsList";

interface IProps {
  title: string;
  subTitle: string;
  sectionItems: {
    id: number;
    url: string;
    image: string;
    description: string;
    name: string;
    author?: string;
  }[];
  color?: string;
}
export const KnowledgeSection = ({
  sectionItems,
  color,
  title,
  subTitle,
}: IProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  const sectionColor = color === "red" ? "text-[#ff3a3b]" : "text-sky-600";
  const textShadowColor =
    color === "red" ? "shadow-light-red" : "shadow-light-blue ";

  return (
    <div
      className="mb-[1.5rem] flex w-full flex-col items-center gap-12 px-4 lg:mb-[4rem]"
      ref={sectionRef}
    >
      <div
        className={`flex flex-col text-center text-2xl ${textShadowColor} gap-2 text-shadow-lg md:text-4xl`}
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
        }}
      >
        <h3 className="text-center ">{title}</h3>
        <span className={`${sectionColor} `}>{subTitle}</span>
      </div>
      <KnowledgeItemsList
        sectionItems={sectionItems}
        color={color ? color : undefined}
      />
    </div>
  );
};
