interface IProps {
  animations: object | undefined;
  item: {
    id: number;
    text: string;
  };
}

export const FactCard = ({ animations, item }: IProps) => {
  return (
    <div className="relative" style={animations}>
      <div
        className={`relative flex h-[250px] items-center border-[2px] bg-linearPurpleBack p-4 md:h-[300px]`}
      >
        <p className="text-center font-fira text-base md:text-lg lg:text-xl">
          {item.text}
        </p>
      </div>
      <div className="absolute -bottom-[15px] -left-[15px] -z-[50] h-full w-full border-[2px] bg-transparent " />
    </div>
  );
};
