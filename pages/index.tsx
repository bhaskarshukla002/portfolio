import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Bhaskar Shukla | Software Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Bhaskar Shukla | Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Bhaskar Shukla | Software Developer" />
        <meta name="description" content="Hey! I'm Bhaskar Shukla, and I'm a Bachelor of Science in Computer Science and Engineering." />

        <meta property="og:title" content="Bhaskar Shukla | Software Developer" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://deverajc.com/" />
        <meta property="og:image" content="https://deverajc.com/screenshot.png" />
        <meta property="og:description" content="Hey! I'm Bhaskar Shukla, and I'm a Bachelor of Science in Computer Science and Engineering." />

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@jc_devz"/>
        <meta name="twitter:title" content="Bhaskar Shukla | Software Developer"/>
        <meta name="twitter:description" content="Hey! I'm Bhaskar Shukla, and I'm a Bachelor of Science in Computer Science and Engineering."/>
        <meta name="twitter:creator" content="@jc_devz"/>
        <meta name="twitter:image" content="https://deverajc.com/screenshot.png"/>

        {/* <meta itemprop="name" content="Bhaskar Shukla | Software Developer"/>
        <meta itemprop="description" content="Hey! I'm Bhaskar Shukla, and I'm a Bachelor of Science in Computer Science and Engineering."/>
        <meta itemprop="image" content="https://deverajc.com/screenshot.png"/> */}
      </Head>
      <Home />
    </>
  );
}
