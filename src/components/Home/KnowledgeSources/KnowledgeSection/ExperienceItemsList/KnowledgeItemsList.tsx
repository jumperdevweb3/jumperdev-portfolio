import { useInView } from "framer-motion";
import { useRef } from "react";
import { KnowledgeCard } from "./KnowledgeCard/KnowledgeCard";

interface IProps {
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

export const KnowledgeItemsList = ({ sectionItems, color }: IProps) => {
  const itemsContainer = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemsContainer, { once: true });
  const cardColors =
    color === "red"
      ? "shadow-red-yt bg-cards-dark-red"
      : "shadow-blue bg-cards-dark-blue";

  return (
    <div
      className="mx-auto w-full max-w-[1200px]"
      ref={itemsContainer}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="grid w-full animate-cardSkewLow grid-cols-cards items-center justify-center gap-12 text-left text-lg lg:animate-levitation-sm">
        {sectionItems.map((item) => {
          return (
            <KnowledgeCard item={item} cardColors={cardColors} key={item.id} />
          );
        })}
      </div>
    </div>
  );
};
