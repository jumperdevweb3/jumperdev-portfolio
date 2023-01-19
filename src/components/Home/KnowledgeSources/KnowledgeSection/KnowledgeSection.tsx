import { KnowledgeItemsList } from "./ExperienceItemsList/KnowledgeItemsList";

interface IProps {
  isInView: boolean;
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
  isInView,
  sectionItems,
  color,
  title,
  subTitle,
}: IProps) => {
  const sectionColor = color === "red" ? "text-[#FF0001]" : "text-sky-600";
  return (
    <div
      className="flex w-full flex-col items-center gap-12 px-4"
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
      }}
    >
      <div className="flex flex-col text-center text-2xl drop-shadow-5xl md:text-4xl">
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
