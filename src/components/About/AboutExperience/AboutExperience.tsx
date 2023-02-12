import { SectionTitle } from "@/ui/SectionTitle/SectionTitle";
import { ExperienceCard } from "./ExperienceCard/ExperienceCard";

export const AboutExperience = () => {
  return (
    <section className="mb-8 flex flex-col items-center justify-center gap-16 overflow-hidden p-4 md:mt-10">
      <SectionTitle title="Two years of" subTitle="programming experience" />
      <ExperienceCard />
    </section>
  );
};
