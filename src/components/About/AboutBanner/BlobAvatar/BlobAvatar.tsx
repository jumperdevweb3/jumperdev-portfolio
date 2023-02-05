import Image from "next/image";
export const BlobAvatar = () => {
  return (
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
  );
};
