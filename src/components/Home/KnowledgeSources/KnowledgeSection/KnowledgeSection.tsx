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
  const sectionColor = color === "red" ? "text-[#ff3a3b]" : "text-sky-600";

  const textShadowColor =
    color === "red" ? "shadow-light-red" : "shadow-light-blue ";
  return (
    <div className="flex w-full flex-col items-center gap-12 px-4 ">
      <div
        className={`flex flex-col text-center text-2xl ${textShadowColor} text-shadow-lg md:text-4xl`}
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
