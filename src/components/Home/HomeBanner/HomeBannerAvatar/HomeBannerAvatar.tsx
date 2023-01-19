import { SocialList } from "@/Header/Navigation/SocialMedia/SocialList";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useWindowSize } from "src/hooks/use-windowSize";
export const HomeBannerAvatar = () => {
  const { width } = useWindowSize();
  const desktop = width >= 768;
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    avatarRef.current?.classList.add("animate-fromRight");
    avatarRef.current?.classList.remove("translate-x-full");
  }, []);
  return (
    <div ref={avatarRef} className="min-h-[400px] translate-x-full">
      <div className="flex animate-levitation flex-col gap-6">
        <Image
          src={"/cuted-memoji.png"}
          className="duration-400 h-[300px] w-[300px] rounded-[50%] bg-avatar-gradient object-contain shadow-own-shadow shadow-shadow-pink transition-all hover:shadow-avatar-hover xl:h-[450px] xl:w-[450px]"
          width={300}
          height={300}
          alt="avatar image"
          priority
        ></Image>
        {desktop && (
          <div className="flex w-full skew-y-[10deg] justify-between gap-6">
            <SocialList />
          </div>
        )}
      </div>
    </div>
  );
};
