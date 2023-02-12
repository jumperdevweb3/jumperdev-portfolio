import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

interface IProps {
  isOpen: boolean;
  size: number;
  color: string;
  onClick?: () => void;
}
export const HamburgerButton = ({ isOpen, size, color, onClick }: IProps) => {
  return (
    <button onClick={onClick} className="animate-wiggle">
      {isOpen ? (
        <IoMdClose fontSize={size} fill={color} />
      ) : (
        <GiHamburgerMenu fontSize={size} fill={color} />
      )}
    </button>
  );
};
