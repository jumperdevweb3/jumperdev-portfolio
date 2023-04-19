import { Navigation } from "./Navigation/Navigation";
import { HeaderBar } from "./HeaderBar/HeaderBar";

export const Header = () => {
  return (
    <>
      <header className="sticky top-0 left-0 z-50 flex w-full justify-center pt-6">
        <div
          className={`relative mx-3 flex w-full max-w-[22rem] flex-row items-center justify-around gap-4 overflow-x-hidden rounded-[15px] border-[2px] border-fuchsia-900 bg-header font-fira md:px-8`}
        >
          <HeaderBar />
          <Navigation />
          <div className="absolute top-0 left-0 -z-30 h-full w-full bg-black"></div>
        </div>
      </header>
    </>
  );
};
