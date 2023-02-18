import { ProjectCard } from "./ProjectCard/ProjectCard";
import { cryptoTrackerApp } from "./projectsList";

export const Projects = () => {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-[90rem] flex-col justify-center gap-8 py-[2rem] px-[1rem]">
      <ProjectCard project={cryptoTrackerApp} />
    </section>
  );
};
