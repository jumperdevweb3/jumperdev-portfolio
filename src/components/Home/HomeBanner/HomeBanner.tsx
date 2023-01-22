import { HomeBannerAvatar } from "./HomeBannerAvatar/HomeBannerAvatar";
import { HomeBannerContent } from "./HomeBannerContent/HomeBannerContent";

export const HomeBanner = () => {
  return (
    <div
      className={`flex w-full flex-col items-center gap-16 overflow-x-hidden pt-4 pb-8 text-[#ddd] sm:min-h-[100vh] md:flex-row md:items-center md:justify-around md:px-6 md:pt-0 md:pb-14`}
    >
      <HomeBannerContent />
      <HomeBannerAvatar />
    </div>
  );
};
