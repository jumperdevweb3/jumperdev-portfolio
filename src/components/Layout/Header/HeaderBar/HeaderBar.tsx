import Link from "next/link";

export const HeaderBar = () => {
  return (
    <div className="flex w-auto justify-center md:w-auto md:p-4">
      <h1
        className={`animate-wiggle text-base font-bold tracking-[0.2em] md:text-lg`}
      >
        <Link href={"/"}>
          Jumper
          <span className={`inline-block text-xl text-c-purple`}>Dev</span>
        </Link>
      </h1>
    </div>
  );
};
