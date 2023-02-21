import "/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/Layout/Layout";
import { useEffect } from "react";
import { useWindowSize } from "src/hooks/use-windowSize";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const { width, height } = useWindowSize();
  useEffect(() => {
    if (typeof window !== "undefined") {
      (document.querySelector(":root") as HTMLElement).style.setProperty(
        "--vh",
        window.innerHeight / 100 + "px"
      );
    }
  }, [width, height]);

  const GoogleAnalitycs = () => (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-8VX61DV22P`}
      />

      <Script id="g-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8VX61DV22P');
        `}
      </Script>
    </>
  );
  return (
    <>
      <GoogleAnalitycs />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
