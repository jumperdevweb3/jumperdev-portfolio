import { Home } from "@/Home/Home";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>JumperDev Portfolio</title>
        <meta name="description" content="Welcome to my portfolio page " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
