import "/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/ui/Layout/Layout";
import { useEffect } from "react";
import { useWindowSize } from "src/hooks/use-windowSize";

export default function App({ Component, pageProps }: AppProps) {
  const { width } = useWindowSize();
  useEffect(() => {
    if (typeof window !== "undefined") {
      (document.querySelector(":root") as HTMLElement).style.setProperty(
        "--vh",
        window.innerHeight / 100 + "px"
      );
    }
  }, [width]);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
