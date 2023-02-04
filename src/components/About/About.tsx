import { InteractiveCardWrapper } from "@/ui/InteractiveCardWrapper/InteractiveCardWrapper";
import { useRef } from "react";
import { AboutBanner } from "./AboutBanner/AboutBanner";
import { BlobAvatar } from "./AboutBanner/BlobAvatar/BlobAvatar";

export const About = () => {
  const textRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="flex flex-col items-center gap-8"></div>
    </>
  );
};
