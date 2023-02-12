import Link from "next/link";
import { navLinks } from "../navLinks";

export const Navigation = ({ onCloseNav }: { onCloseNav: () => void }) => {
  return (
    <nav className="mx-auto w-[90%] py-12 md:mx-0 md:w-auto md:p-0">
      <ul className="flex flex-col gap-12 text-lg md:flex-row">
        {navLinks.map((item) => {
          return (
            <li key={item.id} onClick={onCloseNav}>
              <Link
                href={item.url}
                className="text-m-gray text-[2rem] lowercase transition-all md:text-[1.2rem] md:hover:text-c-gray"
              >
                <span className="text-c-purple ">#</span>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
