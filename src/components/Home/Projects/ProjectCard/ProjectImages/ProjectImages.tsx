import Image from "next/image";
export const ProjectImages = ({
  images,
  isInView,
}: {
  images: string[];
  isInView: boolean;
}) => {
  return (
    <div
      className="absolute top-1/2 left-0 -z-10 h-[90%] w-full translate-y-[-50%] lg:relative lg:w-[40%]"
      style={{
        transform: isInView ? "translateY(-50%)" : "translate(200px, -50%)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
      }}
    >
      <Image
        src={images[1]}
        width={500}
        height={500}
        alt="crypto project"
        className="absolute top-0 left-[50%] max-h-[80%] w-auto translate-x-[-50%] rounded-[20px] border-[2px] border-[rgba(255,255,255,0.7)] lg:left-0 lg:translate-x-0"
      />
      <Image
        src={images[0]}
        width={500}
        height={500}
        alt="crypto project"
        className="absolute top-[20%] left-[60%] -z-20 max-h-[80%] w-auto translate-x-[-50%] rounded-[20px] border-[2px] border-[rgba(255,255,255,0.7)]"
      />
    </div>
  );
};
