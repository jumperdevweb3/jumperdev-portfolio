import Image from "next/image";
import Link from "next/link";
import styles from "./Projects.module.scss";
export const Projects = () => {
  return (
    <section className="mx-auto flex max-w-[90rem] justify-center py-[2rem] px-[1rem]">
      <div className="relative flex h-[500px] max-w-[650px] items-center overflow-hidden rounded-[20px] border-[2px] border-[rgb(255,255,255,0.7)] lg:w-[90%] lg:max-w-[90%] lg:border-none">
        <div className="absolute top-0 left-0 -z-[1] h-full w-full bg-project-card backdrop-blur-[2px] lg:bg-none lg:backdrop-blur-none"></div>
        <div className="flex h-full w-full max-w-[700px] items-center justify-center bg-transparent px-[0.5rem] py-[1rem] text-center lg:h-auto lg:w-[45%] lg:translate-x-[40%] lg:rounded-[15px] lg:border-[2px] lg:border-[rgb(255,255,255,07)] lg:bg-project-card lg:py-[1rem] lg:px-[2rem] lg:backdrop-blur-[2px]">
          <div className="flex h-full flex-col items-center justify-center gap-[1rem] md:gap-[2.5rem]">
            <h2 className="bg-lightGradient bg-clip-text text-[1.5rem] font-bold text-transparent">
              Crypto Tracker App
            </h2>
            <div className="flex flex-col gap-4">
              <h3 className="text-[1.2rem] font-bold">Tech Stack 🛠️</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="rounded-[15px] bg-[#bc12f8] px-4 py-1 text-[0.8rem]">
                  React
                </span>
                <span className="rounded-[15px] bg-[#bc12f8] px-4 py-1 text-[0.8rem]">
                  TypeScript
                </span>
                <span className="rounded-[15px] bg-[#bc12f8] px-4 py-1 text-[0.8rem]">
                  Redux
                </span>
                <span className="rounded-[15px] bg-[#bc12f8] px-4 py-1 text-[0.8rem]">
                  Next.js
                </span>
                <span className="rounded-[15px] bg-[#bc12f8] px-4 py-1 text-[0.8rem]">
                  CSS Modules
                </span>
                <span className="rounded-[15px] bg-[#bc12f8] px-4 py-1 text-[0.8rem]">
                  React Query
                </span>
              </div>
            </div>
            <p className="text-sm text-[rgb(255,255,255,0.7)]">
              Tracking current crypto prices & news with useful tools created by
              me & developing my skills. I wanted an ad-free and easy-to-use app
              for my own use
            </p>
            <Link
              href={"https://github.com/jumperdevweb3/crypto-tracker-app"}
              className="w-[180px] rounded-xl bg-[#b624b9] py-1 duration-150 hover:bg-[#7733AD]"
              target={"_blank"}
            >
              <span className="mx-2">🔍</span>Explore
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 -z-10 h-[90%] w-full translate-x-[-50%] lg:relative lg:w-[40%]">
          <Image
            src={"/test2.png"}
            width={500}
            height={500}
            alt="crypto project"
            className="absolute top-0 left-[50%] max-h-[80%] w-auto translate-x-[-50%] rounded-[20px] border-[2px] border-[rgba(255,255,255,0.7)]"
          />
          <Image
            src={"/test1.png"}
            width={500}
            height={500}
            alt="crypto project"
            className="absolute top-[20%] left-[60%] -z-20 max-h-[80%] w-auto translate-x-[-50%] rounded-[20px] border-[2px] border-[rgba(255,255,255,0.7)]"
          />
        </div>
      </div>
    </section>
  );
};
