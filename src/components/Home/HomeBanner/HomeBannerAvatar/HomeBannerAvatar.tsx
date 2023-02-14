import { SocialList } from "@/Layout/Header/Navigation/SocialMedia/SocialList";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useWindowSize } from "src/hooks/use-windowSize";

export const HomeBannerAvatar = () => {
  const avatarRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(avatarRef, { once: true });
  const { width } = useWindowSize();
  const desktop = width >= 768;

  return (
    <div
      ref={avatarRef}
      className="relative z-10 min-h-[400px]"
      style={{
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="flex animate-levitation flex-col items-center gap-6 md:min-h-[300px] md:min-w-[300px]">
        <Image
          src={"/cuted-memoji.png"}
          className="duration-400 h-[300px] w-[300px] rounded-[50%] bg-avatar-gradient object-contain shadow-own-shadow shadow-pink transition-all hover:shadow-avatar-hover 2xl:h-[350px] 2xl:w-[350px] sm-mob:h-[250px] sm-mob:w-[250px] "
          width={300}
          height={300}
          alt="avatar image"
          priority
        />
        {desktop && (
          <div className="flex w-full skew-y-[10deg] justify-between gap-6">
            <SocialList />
          </div>
        )}
      </div>
    </div>
  );
};
