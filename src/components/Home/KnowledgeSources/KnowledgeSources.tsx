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
      <div
        className="mb-[0%] flex flex-col items-center gap-2 bg-transparent text-center  text-[1.7rem]  shadow-own-shadow md:mb-[4%] md:text-4xl lg:text-5xl"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <h2>Two years of</h2>
        <span className="text-purple-300 shadow-c-purple text-shadow-lg">
          programming experience
        </span>
      </div>
      <KnowledgeSection {...coursesProps} />
      <KnowledgeSection {...ytChannelsProps} />
    </section>
  );
};
