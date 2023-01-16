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
          className="duration-400 h-[300px] w-[300px] rounded-[50%] bg-test-2 object-contain shadow-m-box-shadow shadow-m-shadow-pink transition-all hover:shadow-m-shadow-hover xl:h-[450px] xl:w-[450px]"
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
