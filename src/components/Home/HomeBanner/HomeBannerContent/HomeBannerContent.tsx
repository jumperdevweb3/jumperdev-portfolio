import { useEffect, useState } from "react";
import { SpringTrail } from "@/ui/Animations/SpringTrail";
import { TypeAnimation } from "react-type-animation";
import { useWindowSize } from "src/hooks/use-windowSize";
export const HomeBannerContent = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();
  const mobile = width <= 420;
  useEffect(() => {
    setOpen(true);
  }, []);

  const TextAnimation = (
    <TypeAnimation
      sequence={[
        "IT",
        2500,
        "web3",
        2000,
        "frontend",
        3000,
        "productivity",
        3000,
        "reading",
        2500,
      ]}
      wrapper="span"
      repeat={Infinity}
      speed={1}
      cursor={false}
    />
  );
  return (
    <div
      className={
        "flex h-auto max-h-[250px] min-h-[200px] flex-col gap-2 text-center font-inter text-4xl font-bold md:text-left lg:text-5xl l-desktop:min-w-[750px] l-desktop:text-6xl"
      }
    >
      <SpringTrail open={open}>
        <p>Hi, 🫣</p>
        <p>My name is </p>
        <p>
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-[transparent]">
            Filip
          </span>
        </p>
        <p>I build web things</p>
        <p>
          ...and i love{" "}
          {!mobile && (
            <span className="inline-block min-w-[240px] bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-left text-[transparent] lg:min-w-[290px]">
              {open && TextAnimation}
            </span>
          )}
        </p>
        {mobile && (
          <p>
            <span className="inline-block min-w-[240px] bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-center text-[transparent] ">
              {open && TextAnimation}
            </span>
          </p>
        )}
      </SpringTrail>
    </div>
  );
};
