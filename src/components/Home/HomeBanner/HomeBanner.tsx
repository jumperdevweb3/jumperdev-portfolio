import { HomeBannerAvatar } from "./HomeBannerAvatar/HomeBannerAvatar";
import { HomeBannerContent } from "./HomeBannerContent/HomeBannerContent";

export const HomeBanner = () => {
  return (
    <div
      className={`flex min-h-[60vh] w-full flex-col items-center gap-16 overflow-x-hidden pt-2 pb-8 text-[#ddd] md:h-auto md:flex-row md:justify-around md:py-14`}
    >
      <HomeBannerContent />
      <HomeBannerAvatar />
    </div>
  );
};
