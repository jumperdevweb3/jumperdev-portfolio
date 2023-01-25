import Image from "next/image";
export const AboutBannerBackground = () => {
  return (
    <div className="absolute top-[60px] left-0 -z-10 h-[calc(calc(var(--vh)_*_100)_-_60px)] w-full">
      <Image
        src={"/wave-haikei.svg"}
        width={1000}
        height={1000}
        alt="bgc"
        className="h-full w-full object-cover"
      />
    </div>
  );
};
