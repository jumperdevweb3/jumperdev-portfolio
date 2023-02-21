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
        async
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-8VX61DV22P`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
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

      <Script strategy="afterInteractive" id="google-tag-manager">
        {`
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-W5WZ269');
  `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
