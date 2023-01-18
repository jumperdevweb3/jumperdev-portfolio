import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
export const Experience = () => {
  const breakPointRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(breakPointRef, { once: false });
  return (
    <div
      className={
        "relative flex min-h-[calc(calc(var(--vh)_*_100)_-_60px)] w-full flex-col items-center gap-6 py-10 font-poppins text-4xl font-bold"
      }
    >
      <div
        className="flex flex-col items-center gap-2 bg-transparent text-center"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
        }}
      >
        <h2>Two years of</h2>
        <span className="text-purple-300">programming experience</span>
      </div>
      <div
        className="my-14"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
        }}
      >
        <Image
          src={
            "https://github-readme-stats-eight-theta.vercel.app/api?username=jumperdevweb3&show_icons=true&theme=algolia&include_all_commits=true&count_private=true"
          }
          height={350}
          width={400}
          alt="github statistic"
        />
      </div>
      <div
        className="flex flex-col items-center gap-6 "
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
        }}
      >
        <h2 className="text-center">
          Courses i have <span className="text-red-300">complete</span>
        </h2>
        <div className="flex flex-col gap-4 text-left text-lg">
          <p>
            · <span className="text-blue-500">React</span> - The Complete Guide
            (incl Hooks, React Router, Redux)
          </p>
          <p>
            ·{" "}
            <span className="bg-test-next bg-clip-text text-transparent">
              Next.js
            </span>{" "}
            & <span className="text-blue-500">React</span> - The Complete Guide
            (incl. Two Paths!)
          </p>
          <p>
            · <span className="text-blue-400">Understanding TypeScript</span> -
            2022 Edition
          </p>
        </div>
      </div>
      <div
        className="absolute bottom-[20%] left-0 h-2 w-full"
        ref={breakPointRef}
      ></div>
    </div>
  );
};
