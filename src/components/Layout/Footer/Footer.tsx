import { AnimatedWaves } from "@/ui/Animations/AnimatedWaves";
import { SocialList } from "../Header/Navigation/SocialMedia/SocialList";

export const Footer = () => {
  return (
    <footer className="relative h-[7rem] w-full overflow-hidden">
      <div className="absolute top-[50%] left-0 flex w-full justify-center gap-12">
        <SocialList />
      </div>
      <AnimatedWaves />
    </footer>
  );
};
