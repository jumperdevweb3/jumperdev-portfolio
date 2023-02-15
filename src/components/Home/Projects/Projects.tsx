import { SectionTitle } from "@/ui/SectionTitle/SectionTitle";
import Image from "next/image";

export const Projects = () => {
  return (
    <section className="relative flex min-h-[100vh] flex-col gap-8 px-4">
      <SectionTitle title="My bigest" subTitle="Project" />
      <div className="rounded-xl bg-slate-500 bg-[#5a0f8d59] p-8 backdrop-blur-sm">
        <p className="font-fira text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vitae
          id amet voluptas, expedita natus, rerum optio iure laborum doloremque
          iste sapiente consectetur dicta nihil, quasi vero? Dolores,
          necessitatibus aliquam.
        </p>
      </div>

      <div className="relative w-full">
        <Image
          src={"/test2.png"}
          width={500}
          height={500}
          alt="project image"
          className="max-w-[85%] rounded-md border-[2px] border-white"
        />
        <Image
          src={"/test1.png"}
          width={500}
          height={500}
          alt="project image"
          className="absolute top-[30%] left-[15%] -z-10 max-w-[85%] rounded-md border-[2px] border-white"
        />
      </div>
    </section>
  );
};
