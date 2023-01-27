import Image from "next/image";

export const AnimatedRocket = () => {
  return (
    <div>
      <Image
        src={"/rocket.png"}
        width={200}
        height={300}
        alt="rocket"
        className="animate-levitation"
        priority
      />
    </div>
  );
};
