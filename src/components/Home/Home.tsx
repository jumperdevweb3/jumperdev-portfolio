import { KnowledgeSources } from "./KnowledgeSources/KnowledgeSources";
import { HomeBanner } from "./HomeBanner/HomeBanner";
import { ScrollSection } from "./ScrollSection/ScrollSection";

export const Home = () => {
  return (
    <>
      <HomeBanner />
      {/* <div className="h-screen w-full"></div> */}
      <ScrollSection />
      <KnowledgeSources />
    </>
  );
};
