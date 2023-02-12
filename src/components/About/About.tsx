import { AboutBanner } from "./AboutBanner/AboutBanner";
import { AboutExperience } from "./AboutExperience/AboutExperience";

export const About = () => {
  return (
    <div className="flex flex-col gap-16 overflow-y-auto overflow-x-hidden pb-20">
      <AboutBanner />
      <AboutExperience />
    </div>
  );
};
