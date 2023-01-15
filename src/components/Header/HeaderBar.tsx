import Link from "next/link";
import { useWindowSize } from "src/hooks/use-windowSize";
import { HamburgerButton } from "./HamburgerButton/HamburgerButton";

interface IProps {
  onClose: () => void;
  onToggle: () => void;
  isNavOpen: boolean;
}
export const HeaderBar = ({ onClose, onToggle, isNavOpen }: IProps) => {
  const { width } = useWindowSize();
  const desktop = width >= 768;
  const hamburgerProps = {
    color: "#fefefe",
    size: 24,
    isOpen: isNavOpen,
    onClick: onToggle,
  };
  return (
    <div className="flex w-full justify-between  p-4 md:w-auto">
      <h1
        className={`text-base font-bold tracking-[0.2em] md:text-lg`}
        onClick={onClose}
      >
        <Link href={"/"}>
          {" "}
          Jumper
          <span
            className={`text-xl text-m-purple ${
              isNavOpen && "animate-bounce"
            } inline-block`}
          >
            Dev
          </span>
        </Link>
      </h1>
      {!desktop && <HamburgerButton {...hamburgerProps} />}
    </div>
  );
};
