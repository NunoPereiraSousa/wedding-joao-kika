import Image from "next/image";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import Head from "next/head";
import { components } from "../slices";

export default function Page({ page }) {
  return <SliceZone slices={page.data.slices} components={components} />;
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
