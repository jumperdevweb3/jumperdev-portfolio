import { AnimatedWaves } from "@/ui/Animations/AnimatedWaves";
import { SocialList } from "../Header/Navigation/SocialMedia/SocialList";

export const Footer = () => {
  return (
    <footer className="relative flex h-[7rem] w-full items-center justify-center gap-12 overflow-hidden">
      <SocialList />
      <AnimatedWaves />
    </footer>
  );
};
