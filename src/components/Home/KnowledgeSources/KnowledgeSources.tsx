import { useInView } from "framer-motion";
import { useRef } from "react";
import { KnowledgeSection } from "./KnowledgeSection/KnowledgeSection";
import { coursesList, youtubeChannels } from "./studiedLists";

export const KnowledgeSources = () => {
  const breakPointRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(breakPointRef, { once: false });

  const coursesProps = {
    isInView,
    sectionItems: coursesList,
    title: "Courses I have",
    subTitle: "completed",
  };
  const ytChannelsProps = {
    isInView,
    sectionItems: youtubeChannels,
    title: "I get my knowledge",
    subTitle: "from",
    color: "red",
  };
  return (
    <section
      className={
        "relative flex min-h-[calc(calc(var(--vh)_*_100)_-_60px)] w-full flex-col items-center gap-[5.5rem] py-10 font-poppins text-4xl font-bold"
      }
      ref={breakPointRef}
    >
      <div
        className="mb-[4%] flex flex-col items-center gap-2 bg-transparent  text-center  text-[1.7rem] shadow-own-shadow  md:text-4xl lg:text-5xl"
        // style={{
        //   transform: isInView ? "none" : "translateX(-200px)",
        //   opacity: isInView ? 1 : 0,
        //   // transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
        // }}
      >
        <h2>Two years of</h2>
        <span className="text-purple-300 ">
          {/* shadow-shadow-pink drop-shadow-4xl */}
          programming experience
        </span>
      </div>
      <KnowledgeSection {...coursesProps} />
      <KnowledgeSection {...ytChannelsProps} />
    </section>
  );
};
