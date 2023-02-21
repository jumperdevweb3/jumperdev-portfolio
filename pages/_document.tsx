import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="gMU-2OIHk2cm2agH6XKONEgfiXvEO-6iS7QjLDs3mA8"
        />
        <link
          rel="apple-touch-icon"
          href="https://jumperweb3.dev/apple-touch-icon.png"
        />
        <meta name="title" content="jumperweb3.dev" />
        <meta
          name="description"
          content="Passionate front-end developer and programmer with a focus on web3. Crafting innovative solutions with code to shape the future of the web."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jumperweb3.dev/" />
        <meta property="og:title" content="jumperweb3.dev" />
        <meta
          property="og:description"
          content="Passionate front-end developer and programmer with a focus on web3. Crafting innovative solutions with code to shape the future of the web."
        />
        <meta
          property="og:image"
          content="https://jumperweb3.dev/metaimage.webp"
        />
        <meta name="copyright" content="JumperWeb3Dev" />
        <meta name="robots" content="all" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jumperweb3.dev/" />
        <meta property="twitter:title" content="jumperweb3.dev" />
        <meta
          property="twitter:description"
          content="Passionate front-end developer and programmer with a focus on web3. Crafting innovative solutions with code to shape the future of the web."
        />
        <meta
          property="twitter:image"
          content="https://jumperweb3.dev/metaimage.webp"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W5WZ269" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
      </body>
    </Html>
  );
}
