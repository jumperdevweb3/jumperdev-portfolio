import { useState } from "react";
import { Navigation } from "./Navigation/Navigation";
import { SocialMedia } from "./Navigation/SocialMedia/SocialMedia";
import { useWindowSize } from "src/hooks/use-windowSize";
import { useEffect } from "react";
import { HeaderBar } from "./HeaderBar";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { width } = useWindowSize();
  const desktop = width >= 768;

  const openNavHandler = () => {
    setIsNavOpen((state) => !state);
  };
  const closeNavHandler = () => {
    setIsNavOpen(false);
  };

  const navPosition = isNavOpen ? "translate-x-0" : "-translate-x-full";

  useEffect(() => {
    if (!desktop) {
      if (isNavOpen) {
        document.body.classList.add("overflow-hidden");
      }
      if (!isNavOpen) {
        document.body.classList.remove("overflow-hidden");
      }
    }
  }, [isNavOpen]);

  return (
    <>
      <header
        className={`sticky top-0 left-0 z-50 flex w-[100%] flex-col items-center overflow-x-hidden bg-main-dark font-fira md:flex-row md:justify-between md:px-8`}
      >
        <HeaderBar
          onClose={closeNavHandler}
          onToggle={openNavHandler}
          isNavOpen={isNavOpen}
        />
        {desktop && <Navigation onCloseNav={closeNavHandler} />}
      </header>
      {!desktop && (
        <div
          className={`fixed top-[60px] left-0 z-0 flex h-[calc(calc(var(--vh)_*_100)_-_60px)] w-full flex-col justify-between bg-main-dark transition-all duration-300 ${navPosition}  z-[90] md:static md:h-auto md:w-auto`}
        >
          <Navigation onCloseNav={closeNavHandler} />
          {!desktop && <SocialMedia />}
        </div>
      )}
    </>
  );
};
