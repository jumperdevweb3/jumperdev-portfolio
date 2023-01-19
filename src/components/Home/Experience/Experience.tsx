import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
export const Experience = () => {
  const breakPointRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(breakPointRef, { once: false });

  const coursesList = [
    {
      id: 1,
      title: "React",
      subTitle: "The Complete Guide (incl Hooks, React Router, Redux)",
      author: "Maximilian Schwarzmüller",
      image: "/reactjs-course.jpg",
      url: "/",
    },
    {
      id: 2,
      title: "Next.js",
      subTitle: "The Complete Guide (incl. Two Paths!)",
      author: "Maximilian Schwarzmüller",
      image: "/nextjs-course.jpg",
      url: "/",
    },
    {
      id: 3,
      title: "Understanding TypeScript ",
      subTitle: "2022 Edition",
      author: "Maximilian Schwarzmüller",
      image: "/typescript-course.jpg",
      url: "/",
    },
  ];

  return (
    <div
      className={
        "gap-18 relative flex min-h-[calc(calc(var(--vh)_*_100)_-_60px)] w-full flex-col items-center py-10 font-poppins text-4xl font-bold"
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
        <span className="text-purple-300 shadow-shadow-pink drop-shadow-4xl">
          programming experience
        </span>
      </div>

      <div
        className="mt-[10%] flex flex-col items-center gap-8"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
        }}
      >
        <div className="flex flex-col text-center">
          <h2 className="text-center">Courses I have</h2>
          <span className="text-sky-600  drop-shadow-5xl">completed</span>
        </div>
        <div className="flex animate-levitation-sm gap-12 text-left text-lg ">
          {coursesList.map((item) => (
            <div
              key={item.id}
              className="relative flex h-[250px] max-w-[250px] cursor-pointer flex-col justify-between overflow-hidden rounded-lg bg-cards-dark-blue shadow-own-shadow shadow-shadow-blue transition-all hover:opacity-50"
            >
              <Link
                href={item.url}
                className="absolute top-0 left-0 h-full w-full"
              ></Link>
              <div className="w-full">
                <Image
                  src={item.image}
                  width={250}
                  height={200}
                  alt={item.subTitle}
                  className="w-full"
                />
              </div>
              <div className="flex h-full flex-col justify-between p-2">
                <h3 className="">{item.title}</h3>
                <p key={item.id} className="text-xs">
                  {item.subTitle}
                </p>
                <h4 className="text-sm text-blue-300">{item.author}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute top-[20%] left-0 h-2 w-full"
        ref={breakPointRef}
      ></div>
    </div>
  );
};
{
  /* <div
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
</div> */
}
