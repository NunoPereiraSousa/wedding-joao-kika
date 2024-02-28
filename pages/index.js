import Image from "next/image";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import Head from "next/head";
import { components } from "../slices";

export default function Page({ page }) {
  return (
    <>
      <Head>
        <title>Casamento Kika & João</title>
        <meta name="title" content="Casamento Kika e João" />
        <meta
          name="description"
          content="Casamento Kika e João  | Mosteiro da Serra do Pilar 6 de julho, às 15:30h"
        />
        <meta property="og:title" content="Casamento Kika e João" />
        <meta
          property="og:description"
          content="Casamento Kika e João  | Mosteiro da Serra do Pilar 6 de julho, às 15:30h"
        />
        <meta property="og:url" content={"https://www.nunops.com"} />
        {/* <meta property="og:image" content={metaImage} /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={"https://www.nunops.com"} />
        <meta name="twitter:title" content="Casamento Kika e João" />
        <meta
          name="twitter:description"
          content="Casamento Kika e João  | Mosteiro da Serra do Pilar 6 de julho, às 15:30h"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/x-icon" href="favicon/favicon.ico" />
        <link rel="manifest" href="favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ee7d3d" />
        <meta
          name="msapplication-TileImage"
          content="favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ee7d3d" />
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage", {
    fetchLinks: "image.image, image.tag, tag.name",
  });

  return {
    props: {
      page,
      metaTitle: page.data.meta_title,
      metaDescription: page.data.meta_description,
      metaImage: page.data.meta_image,
    },
  };
}
