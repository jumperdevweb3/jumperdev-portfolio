import Link from "next/link";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useWindowSize } from "src/hooks/use-windowSize";

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
  const itemsContainer = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemsContainer, { once: true });
  const { width } = useWindowSize();
  const mobile = width <= 550;
  const cardColors =
    color === "red"
      ? "shadow-red-yt bg-cards-dark-red"
      : "shadow-blue bg-cards-dark-blue";

  return (
    <div
      className="mx-auto w-full max-w-[1200px]"
      ref={itemsContainer}
      style={
        !mobile
          ? {
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }
          : undefined
      }
    >
      <div className="grid w-full animate-cardSkewLow grid-cols-cards items-center justify-center gap-12 text-left text-lg lg:animate-levitation-sm">
        {sectionItems.map((item) => {
          const cardItemRef = useRef<HTMLDivElement>(null);

          const isInViewMobile = useInView(cardItemRef, { once: true });

          const authorContent = !!item.author && (
            <h4 className="justify-self-end p-2 text-sm text-blue-300">
              {item.author}
            </h4>
          );
          return (
            <div
              key={item.id}
              className={`relative flex min-h-[270px] w-[250px] cursor-pointer flex-col overflow-hidden rounded-lg shadow-own-shadow transition-all hover:opacity-50 ${cardColors}`}
              ref={cardItemRef}
              style={
                mobile
                  ? {
                      transform: isInViewMobile ? "none" : "translateX(-200px)",
                      opacity: isInViewMobile ? 1 : 0,
                      transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }
                  : undefined
              }
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
                <p
                  key={item.id}
                  className="font-inter text-xs font-normal text-[#ccc]"
                >
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
