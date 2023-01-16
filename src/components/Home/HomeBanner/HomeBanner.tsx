import { HomeBannerAvatar } from "./HomeBannerAvatar/HomeBannerAvatar";
import { HomeBannerContent } from "./HomeBannerContent/HomeBannerContent";

export const HomeBanner = () => {
  return (
    <div
      className={`flex min-h-[60vh] w-full flex-col items-center gap-16 overflow-x-hidden pt-2 pb-8 text-[#ddd] md:min-h-[80vh] md:flex-row md:justify-around md:py-14 md:px-6`}
    >
      <HomeBannerContent />
      <HomeBannerAvatar />
    </div>
  );
};
