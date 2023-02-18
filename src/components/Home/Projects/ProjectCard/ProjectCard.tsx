import { ProjectImages } from "./ProjectImages/ProjectImages";
import { ProjectContent } from "./ProjectContent/ProjectContent";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useWindowSize } from "src/hooks/use-windowSize";

interface IProps {
  content: {
    name: string;
    description: string;
    url: string;
    techStack: string[];
  };
  images: string[];
}

export const ProjectCard = ({ project }: { project: IProps }) => {
  const { width } = useWindowSize();
  const isMobile = width <= 1023 && width !== 0;
  const projectBoxRef = useRef<HTMLDivElement>(null);
  const isProjectBoxInView = useInView(projectBoxRef, { once: true });
  return (
    <div
      className="relative flex h-[500px] max-w-[650px] items-center overflow-hidden rounded-[20px] border-[2px] border-[rgb(255,255,255,0.7)] lg:w-[90%] lg:max-w-[90%] lg:justify-center lg:border-none"
      ref={projectBoxRef}
    >
      <div className="absolute top-0 left-0 -z-[1] h-full w-full bg-project-card backdrop-blur-[2px] lg:bg-none lg:backdrop-blur-none"></div>
      <div
        className="flex h-full w-full max-w-[700px] items-center justify-center bg-transparent px-[0.5rem] py-[1rem] text-center lg:h-auto lg:w-[45%] lg:translate-x-[20%] lg:rounded-[15px] lg:border-[2px] lg:border-[rgb(255,255,255,07)] lg:bg-project-card lg:py-[1rem] lg:px-[2rem] lg:backdrop-blur-[2px]"
        style={
          !isMobile
            ? {
                transform: isProjectBoxInView
                  ? "translateX(20%)"
                  : "translateX(-200px)",
                opacity: isProjectBoxInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
              }
            : undefined
        }
      >
        <ProjectContent {...project.content} />
      </div>
      <ProjectImages images={project.images} isInView={isProjectBoxInView} />
    </div>
  );
};
