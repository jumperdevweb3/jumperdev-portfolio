import { KnowledgeSources } from "./KnowledgeSources/KnowledgeSources";
import { HomeBanner } from "./HomeBanner/HomeBanner";
import { ScrollSection } from "./ScrollSection/ScrollSection";
import { Projects } from "./Projects/Projects";

export const Home = () => {
  return (
    <>
      <HomeBanner />
      <ScrollSection />
      <Projects />
      <KnowledgeSources />
    </>
  );
};
