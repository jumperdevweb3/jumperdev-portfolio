interface IProps {
  animations: object | undefined;
  item: {
    id: number;
    text: string;
  };
}

export const FactCard = ({ animations, item }: IProps) => {
  return (
    <div
      className="relative ml-[15px] h-[300px] w-[250px] shrink-0 border-[1px]"
      style={animations}
    >
      <div
        className={`relative flex h-full w-full items-center border-[2px] bg-linearPurpleBack p-4 `}
      >
        <p className="text-center font-fira text-base">{item.text}</p>
      </div>
      <div className="absolute -bottom-[15px] -left-[15px] -z-[50] h-full w-full border-[2px] bg-transparent " />
    </div>
  );
};
