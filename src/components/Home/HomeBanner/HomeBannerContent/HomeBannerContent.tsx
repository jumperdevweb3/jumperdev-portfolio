import { useEffect, useState } from "react";
import { SpringTrail } from "@/ui/Animations/SpringTrail";
import { TypeAnimation } from "react-type-animation";
export const HomeBannerContent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const TextAnimation = (
    <TypeAnimation
      sequence={[
        "web3",
        3500,
        "frontend",
        2000,
        "productivity",
        3000,
        "reading",
        3000,
      ]}
      cursor={true}
      wrapper="span"
      repeat={Infinity}
      speed={1}
    />
  );
  return (
    <div
      className={
        "flex h-auto max-h-[250px] min-h-[200px] flex-col gap-2 text-center font-inter text-4xl font-bold md:text-left lg:text-5xl"
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
          <span className="inline-block min-w-[290px] bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-[transparent]">
            {open && TextAnimation}
          </span>
        </p>
      </SpringTrail>
    </div>
  );
};
