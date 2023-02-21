import { About } from "@/About/About";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>JumperWeb3Dev - About</title>
        <meta name="description" content="Welcome to my about page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </>
  );
}
