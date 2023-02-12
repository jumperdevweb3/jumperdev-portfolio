import { AnimatedWaves } from "@/ui/Animations/AnimatedWaves";
import { SocialList } from "./SocialList";

export const SocialMedia = () => {
  return (
    <div className="relative mx-auto flex w-full justify-around gap-4 overflow-x-hidden py-8">
      <SocialList />
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
        <AnimatedWaves />
      </div>
    </div>
  );
};
