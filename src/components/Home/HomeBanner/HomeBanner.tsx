import { BackgroundParticles } from "@/ui/BackgroundParticles/BackgroundParticles";
import { HomeBannerAvatar } from "./HomeBannerAvatar/HomeBannerAvatar";
import { HomeBannerContent } from "./HomeBannerContent/HomeBannerContent";

export const HomeBanner = () => {
  return (
    <div
      className={`relative mt-4 mb-8 flex w-full flex-col items-center gap-16 overflow-x-hidden text-[#ddd] sm:min-h-[100vh] md:mt-0 md:mb-14 md:flex-row md:items-center md:justify-around md:px-6`}
    >
      <HomeBannerContent />
      <HomeBannerAvatar />
      <BackgroundParticles />
    </div>
  );
};
