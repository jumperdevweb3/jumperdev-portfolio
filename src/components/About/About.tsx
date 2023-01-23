import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
export const About = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const isTitleInView = useInView(titleRef, { once: true });
  const isRocketInView = useInView(rocketRef, { once: true });

  const factsArray = [
    { id: 1, text: "I love creating new things" },
    { id: 2, text: "IT enthusiast" },
    { id: 3, text: "I'm a pedant " },
    { id: 4, text: "I am always open to new experiences 🙋‍♂️" },
    { id: 5, text: "Check out the rest below ⬇" },
  ];

  return (
    <section className="mt-[3rem] flex min-h-screen flex-col items-center gap-4 overflow-x-hidden px-2 text-center font-fira">
      <h2
        className="font-poppins text-xl font-bold md:text-4xl "
        ref={titleRef}
        style={{
          transform: isTitleInView ? "none" : "translateY(-100%)",
          opacity: isTitleInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        Some facts{" "}
        <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-[transparent]">
          about me
        </span>{" "}
        <span className="text-2xl md:text-4xl">🫡</span>
      </h2>
      <div
        className="flex flex-col gap-2 font-medium md:text-xl"
        style={{
          transform: isTitleInView ? "none" : "translateX(200px)",
          opacity: isTitleInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1.1s",
        }}
      >
        {/* {factsArray.map((item) => {
          const factRef = useRef<HTMLParagraphElement>(null);
          const isFactInView = useInView(factRef, { once: true });
          const direction = item.id % 2 === 0 ? "" : "-";
          return (
            <p
              key={item.id}
              ref={factRef}
              style={{
                transform: isFactInView
                  ? "none"
                  : `translateX(${direction}200px)`,
                opacity: isFactInView ? 1 : 0,
                transition: `all 1s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                  0.5 + item.id / 9
                }s`,
              }}
            >
              {item.text}
            </p>
          );
        })} */}
        {factsArray.map((item) => {
          return <p key={item.id}>{item.text}</p>;
        })}
      </div>
      <div
        ref={rocketRef}
        style={{
          transform: isRocketInView ? "none" : "translateY(200px)",
          opacity: isRocketInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1.1s",
        }}
      >
        <Image
          src={"/rocket.png"}
          width={200}
          height={300}
          alt="rocket"
          className="animate-levitation"
          priority
        />
      </div>
    </section>
  );
};
