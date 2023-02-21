import { SectionTitle } from "@/ui/SectionTitle/SectionTitle";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { cryptoTrackerApp } from "./projectsList";

export const Projects = () => {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-[90rem] flex-col justify-center gap-16 py-[2rem] px-[1rem]">
      <SectionTitle title="My own" subTitle="projects" />
      <ProjectCard project={cryptoTrackerApp} />
    </section>
  );
};
