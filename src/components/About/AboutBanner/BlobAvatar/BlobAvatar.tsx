import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const BlobAvatar = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const isBlobInView = useInView(blobRef, { once: true });
  return (
    <div
      ref={blobRef}
      style={{
        transform: isBlobInView ? "none" : "translateY(200px)",
        opacity: isBlobInView ? 1 : 0,
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      <div className="flex items-center justify-center">
        <div className="h-[200px] w-[200px] animate-blob  overflow-hidden rounded-bubble border-[3px] border-solid border-white bg-linearPurpleBack lg:h-[300px] lg:w-[300px]">
          <Image
            src="/memoji.png"
            alt="asd"
            width={300}
            height={300}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};
