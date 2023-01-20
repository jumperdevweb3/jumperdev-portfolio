import Link from "next/link";
import Image from "next/image";

interface IProps {
  sectionItems: {
    id: number;
    url: string;
    image: string;
    description: string;
    name: string;
    author?: string;
  }[];
  color?: string;
}

export const KnowledgeItemsList = ({ sectionItems, color }: IProps) => {
  const cardColors =
    color === "red"
      ? "shadow-red-yt bg-cards-dark-red"
      : "shadow-shadow-blue bg-cards-dark-blue";

  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="grid w-full animate-cardSkewLow grid-cols-cards items-center justify-center gap-12 text-left text-lg lg:animate-levitation-sm">
        {sectionItems.map((item) => {
          const authorContent = !!item.author && (
            <h4 className="p-2 text-sm text-blue-300">{item.author}</h4>
          );
          return (
            <div
              key={item.id}
              className={`relative flex min-h-[270px] w-[250px] cursor-pointer flex-col overflow-hidden rounded-lg shadow-own-shadow transition-all hover:opacity-50 ${cardColors}`}
            >
              <Link
                href={item.url}
                className="absolute top-0 left-0 h-full w-full"
              ></Link>
              <div className="h-[120px] w-full">
                <Image
                  src={item.image}
                  width={250}
                  height={250}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex h-full flex-col gap-[1rem] p-2">
                <h3 className="">{item.name}</h3>
                <p key={item.id} className="font-inter text-xs font-normal">
                  {item.description}
                </p>
              </div>
              {authorContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};
