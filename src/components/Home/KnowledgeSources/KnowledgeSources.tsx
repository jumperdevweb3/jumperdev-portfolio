import { KnowledgeSection } from "./KnowledgeSection/KnowledgeSection";
import { coursesList, youtubeChannels } from "./studiedLists";

export const KnowledgeSources = () => {
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
    >
      <KnowledgeSection {...coursesProps} />
      <KnowledgeSection {...ytChannelsProps} />
    </section>
  );
};
