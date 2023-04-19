import Link from "next/link";
import { navigationLinks } from "../navigationLinks";

export const Navigation = () => {
  return (
    <nav className="w-[6rem] py-4 md:mx-0 md:w-auto md:p-0 md:py-6">
      <ul className="flex flex-row justify-between text-lg md:gap-12">
        {navigationLinks.map((item) => {
          return (
            <li key={item.id}>
              <Link
                href={item.url}
                className="text-m-gray text-[2rem] lowercase transition-all md:text-[1.2rem] md:hover:text-c-gray"
              >
                {item.icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
