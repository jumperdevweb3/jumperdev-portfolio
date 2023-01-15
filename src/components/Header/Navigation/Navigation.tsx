import Link from "next/link";
import { navLinks } from "../navLinks";

export const Navigation = ({ onCloseNav }: { onCloseNav: () => void }) => {
  return (
    <nav className="py-12 px-4 md:p-0">
      <ul className="flex flex-col gap-12 text-lg md:flex-row">
        {navLinks.map((item) => {
          return (
            <li key={item.id} className={``} onClick={onCloseNav}>
              <Link
                href={item.url}
                className="text-[2rem] lowercase text-m-gray transition-all  hover:text-white md:text-[1.2rem] md:hover:tracking-wider"
              >
                <span className="text-m-purple ">#</span>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
