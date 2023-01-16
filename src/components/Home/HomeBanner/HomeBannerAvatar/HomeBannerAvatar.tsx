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
    <div ref={avatarRef} className="translate-x-full">
      <div className="flex animate-levitation flex-col gap-6">
        <Image
          src={"/avatar.png"}
          className="duration-400 h-[300px] w-[300px] rounded-[50%] shadow-m-box-shadow shadow-m-shadow-purple transition-all hover:shadow-m-shadow-hover"
          width={300}
          height={300}
          alt="avatar image"
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
