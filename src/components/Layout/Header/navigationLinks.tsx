import { AiFillHome } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
export const navigationLinks = [
  {
    id: 0,
    name: "Home",
    url: "/",
    icon: <AiFillHome fill="#fff" fontSize={"1.4rem"} />,
  },
  {
    id: 1,
    name: "About me",
    url: "/about",
    icon: <BsPersonCircle fill="#fff" fontSize={"1.4rem"} />,
  },
];
