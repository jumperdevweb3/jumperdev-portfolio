import { KnowledgeSources } from "./KnowledgeSources/KnowledgeSources";
import { HomeBanner } from "./HomeBanner/HomeBanner";
import { ScrollSection } from "./ScrollSection/ScrollSection";

export const Home = () => {
  return (
    <>
      <HomeBanner />
      <ScrollSection />
      <KnowledgeSources />
    </>
  );
};
