import { Experience } from "./Experience/Experience";
import { HomeBanner } from "./HomeBanner/HomeBanner";
import { ScrollSection } from "./ScrollSection/ScrollSection";

export const Home = () => {
  return (
    <>
      <HomeBanner />
      <ScrollSection />
      <Experience />
    </>
  );
};
