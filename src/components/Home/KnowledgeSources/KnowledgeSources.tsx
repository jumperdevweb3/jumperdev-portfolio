import { SectionTitle } from "@/ui/SectionTitle/SectionTitle";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { KnowledgeSection } from "./KnowledgeSection/KnowledgeSection";
import { coursesList, youtubeChannels } from "./studiedLists";

export const KnowledgeSources = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const coursesProps = {
    sectionItems: coursesList,
    title: "Courses I have",
    subTitle: "completed",
  };
  const ytChannelsProps = {
    sectionItems: youtubeChannels,
    title: "I get my knowledge",
    subTitle: "from",
    color: "red",
  };
  return (
    <section
      className={
        "relative flex min-h-[calc(calc(var(--vh)_*_100)_-_60px)] w-full flex-col items-center gap-[5.5rem] pt-10 pb-[5rem] font-poppins text-4xl font-bold"
      }
      ref={containerRef}
    >
      <SectionTitle
        title="Two year of"
        subTitle="programming expirence"
        isInView={isInView}
      />
      <KnowledgeSection {...coursesProps} />
      <KnowledgeSection {...ytChannelsProps} />
    </section>
  );
};
