import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import styles from "./test.module.css";
export const AboutBanner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true });

  const factsArray = [
    { id: 1, text: "I love creating new things" },
    { id: 2, text: "IT enthusiast" },
    { id: 3, text: "I'm a pedant " },
    { id: 4, text: "I am always open to new experiences" },
    { id: 5, text: "Check out the rest below." },
  ];

  return (
    <section
      className="mt-[3rem] flex min-h-screen flex-col items-center gap-4 overflow-x-hidden px-2 text-center font-fira"
      ref={sectionRef}
    >
      <h2
        className="font-poppins text-2xl font-bold md:text-4xl "
        style={{
          transform: isSectionInView ? "none" : "translateY(-100%)",
          opacity: isSectionInView ? 1 : 0,
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
          transform: isSectionInView ? "none" : "translateX(200px)",
          opacity: isSectionInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1.1s",
        }}
      >
        {factsArray.map((item) => {
          return <p key={item.id}>{item.text}</p>;
        })}
      </div>
      <div
        style={{
          transform: isSectionInView ? "none" : "translateY(200px)",
          opacity: isSectionInView ? 1 : 0,
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
      <div className={styles.wrap}>
        <div className={styles.circle}>
          <Image src="/memoji.png" alt="asd" width={300} height={300} />
        </div>
      </div>
    </section>
  );
};
