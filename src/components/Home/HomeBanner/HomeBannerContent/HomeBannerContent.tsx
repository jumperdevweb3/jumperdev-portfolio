import { useEffect, useRef } from "react";

export const HomeBannerContent = () => {
  const textBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    textBoxRef.current?.classList.add("animate-fromLeft");
    textBoxRef.current?.classList.remove("-translate-x-full");
  }, []);
  return (
    <div
      ref={textBoxRef}
      className="flex -translate-x-full flex-col gap-2 text-center font-inter text-4xl font-bold md:text-left"
    >
      <p>Hi, 🫣</p>
      <p>My name is </p>
      <p>
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-[transparent]">
          Filip
        </span>
      </p>
      <p>I build things</p>
      <p>
        ...and i love{" "}
        <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-[transparent]">
          web3
        </span>
      </p>
    </div>
  );
};
