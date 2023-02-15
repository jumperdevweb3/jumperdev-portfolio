import Image from "next/image";

export const Projects = () => {
  return (
    <section className="min-h-[80vh]">
      <div className="relative flex w-full justify-center">
        <div className="relatve h-auto w-[50%]">
          <div className=" h-[5rem] w-[40%]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              vitae id amet voluptas, expedita natus, rerum optio iure laborum
              doloremque iste sapiente consectetur dicta nihil, quasi vero?
              Dolores, necessitatibus aliquam.
            </p>
          </div>
        </div>
        <div className="relative h-full w-[40%]">
          <Image
            src={"/crypto_project1.png"}
            width={500}
            height={500}
            alt="crypto project"
            className="w-100% h-auto"
          />
          <Image
            src={"/crypto_project1_2.png"}
            width={500}
            height={500}
            alt="crypto project"
            className="w-100% -translate-y-[50% absolute top-[20%] left-[70%] -z-10 h-auto -translate-x-[50%]"
          />
        </div>
      </div>
    </section>
  );
};
