import Image from "next/image";
export const AboutBannerBackground = ({ reverse }: { reverse?: boolean }) => {
  const reverseStyle = reverse && "-scale-y-[1]";
  return (
    <div className="absolute top-[0px] left-0 -z-10 h-[calc(calc(var(--vh)_*_100)_-_60px)] w-full">
      <Image
        src={"/wave-haikei.svg"}
        width={1000}
        height={1000}
        alt="bgc"
        className={`h-full w-full object-cover ${reverseStyle}`}
      />
    </div>
  );
};
