import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
interface Props {
  scrollHandler: (direction: "left" | "right") => void;
}
export const SliderButtons = ({ scrollHandler }: Props) => {
  return (
    <div className="absolute top-[50%] left-[50%] flex w-[350px] translate-x-[-50%] justify-between text-4xl">
      <button onClick={() => scrollHandler("left")}>
        <MdArrowBackIosNew />
      </button>
      <button onClick={() => scrollHandler("right")}>
        <MdArrowForwardIos />
      </button>
    </div>
  );
};
