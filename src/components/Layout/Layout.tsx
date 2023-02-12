import { Header } from "@/Layout/Header/Header";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="pt-4">{children}</main>
    </>
  );
};
