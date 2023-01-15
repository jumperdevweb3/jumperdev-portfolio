import { useState } from "react";
import { Navigation } from "./Navigation/Navigation";
import { HamburgerButton } from "./HamburgerButton/HamburgerButton";
import { SocialMedia } from "./Navigation/SocialMedia/SocialMedia";
import { useWindowSize } from "src/hooks/use-windowSize";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { width } = useWindowSize();
  const desktop = width >= 768;

  const openNavHandler = () => {
    setIsNavOpen((state) => !state);
  };

  const hamburgerProps = {
    color: "#fefefe",
    size: 24,
    isOpen: isNavOpen,
    onClick: openNavHandler,
  };
  const navPosition = isNavOpen ? "left-0" : "-left-full";

  return (
    <header
      className={`flex w-[100%] flex-col items-center overflow-x-hidden font-fira-code md:flex-row md:justify-between md:px-8`}
    >
      <div className="flex w-full justify-between p-4 md:w-auto ">
        <h1 className={`text-base font-bold tracking-[0.2em]`}>
          Jumper
          <span
            className={`text-xl text-m-purple ${
              isNavOpen && "animate-bounce"
            } inline-block`}
          >
            Dev
          </span>
        </h1>
        {!desktop && <HamburgerButton {...hamburgerProps} />}
      </div>
      <div
        className={`fixed top-[60px] z-10 flex h-[calc(100vh_-_60px)] w-full flex-col justify-between bg-m-bg transition-all duration-300 ${navPosition} md:static md:h-auto md:w-auto`}
      >
        <Navigation onCloseNav={() => setIsNavOpen(false)} />
        {!desktop && <SocialMedia />}
      </div>
    </header>
  );
};
