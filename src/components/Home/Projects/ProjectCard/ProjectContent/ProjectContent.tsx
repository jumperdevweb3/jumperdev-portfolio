import Link from "next/link";
import { TechStack } from "./TechStack/TechStack";

interface IProps {
  name: string;
  description: string;
  url: string;
  techStack: string[];
}
export const ProjectContent = ({
  name,
  description,
  url,
  techStack,
}: IProps) => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-[1rem] md:gap-[2.5rem]">
      <h2 className="bg-lightGradient bg-clip-text text-[1.5rem] font-bold text-transparent">
        {name}
      </h2>
      <div className="flex flex-col gap-4">
        <h3 className="text-[1.2rem] font-bold">Tech Stack 🛠️</h3>
        <TechStack stackArr={techStack} />
      </div>
      <p className="text-sm text-[rgb(255,255,255,0.7)]">{description}</p>
      <Link
        href={url}
        className="w-[180px] rounded-xl bg-[#b624b9] py-1 duration-150 hover:bg-[#7733AD]"
        target={"_blank"}
      >
        <span className="mx-2">🔍</span>Explore
      </Link>
    </div>
  );
};
