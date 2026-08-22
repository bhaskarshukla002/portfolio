import Head from "next/head";
import { Home } from "@/components/home/Home";
import data from "@/data";

export default function home() {
  const title = `${data.personal.name} | ${data.personal.title}`;
  const description = data.hero.description || `${data.personal.name} | ${data.personal.title}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href={`${data.site.basePath}${data.site.favicon}`} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={data.personal.siteUrl} />
        <meta property="og:image" content={data.personal.profileImage || "#"} />
        <meta property="og:description" content={description} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={data.personal.siteUrl || "#"} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content={data.socials?.github || "#"} />
        <meta name="twitter:image" content={data.personal.profileImage || "#"} />
      </Head>
      <Home />
    </>
  );
}
