import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { InteractiveCardWrapper } from "@/ui/InteractiveCardWrapper/InteractiveCardWrapper";

interface IProps {
  item: {
    id: number;
    url: string;
    image: string;
    description: string;
    name: string;
    author?: string;
  };
  cardColors?: string;
}
export const KnowledgeCard = ({ item, cardColors }: IProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const authorContent = !!item.author && (
    <h4 className="justify-self-end p-2 text-sm text-blue-300">
      {item.author}
    </h4>
  );
  return (
    <Link key={item.id} href={item.url} target="_blank">
      <InteractiveCardWrapper
        height={cardRef.current?.offsetHeight}
        width={cardRef.current?.offsetWidth}
      >
        <div
          className={`relative flex min-h-[270px] w-[250px] cursor-pointer flex-col overflow-hidden rounded-lg shadow-own-shadow transition-all hover:opacity-50 ${cardColors} justify-between pb-1`}
          ref={cardRef}
        >
          <div>
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
              <p
                key={item.id}
                className="font-inter text-xs font-normal text-[#ccc]"
              >
                {item.description}
              </p>
            </div>
          </div>
          {authorContent}
        </div>
      </InteractiveCardWrapper>
    </Link>
  );
};
