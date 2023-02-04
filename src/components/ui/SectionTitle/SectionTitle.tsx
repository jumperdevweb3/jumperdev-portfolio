interface IProps {
  isInView?: boolean;
  title: string;
  subTitle?: string;
}
export const SectionTitle = ({ isInView, title, subTitle }: IProps) => {
  return (
    <div
      className=" flex flex-col items-center gap-2 bg-transparent text-center  text-[1.7rem]  shadow-own-shadow md:text-4xl lg:text-5xl"
      style={
        isInView
          ? {
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }
          : undefined
      }
    >
      <h2>{title}</h2>
      {subTitle && (
        <span className="text-purple-300 shadow-c-purple text-shadow-lg">
          {subTitle}
        </span>
      )}
    </div>
  );
};
