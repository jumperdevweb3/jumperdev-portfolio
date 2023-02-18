export const TechStack = ({ stackArr }: { stackArr: string[] }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {stackArr.map((item) => (
        <span
          key={item}
          className="rounded-[15px] bg-[#bc12f8] px-4 py-1 text-[0.8rem]"
        >
          {item}
        </span>
      ))}
    </div>
  );
};
