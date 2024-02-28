import "../styles/index.scss";
import "@splidejs/react-splide/css";

import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "@/prismicio";
import Heading from "@/components/Text/Heading";
import Paragraph from "@/components/Text/Paragraph";
import { PrismicLink, PrismicProvider } from "@prismicio/react";
import Link from "next/link";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import Preloader from "@/components/UI Elements/Preloader";
import Timer from "@/components/UI Elements/Timer";

const richTextComponents = {
  paragraph: ({ children }) => <Paragraph>{children}</Paragraph>,
  heading1: ({ children }) => (
    <Heading as="h1" size="xxl">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h2" size="xl">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="lg">
      {children}
    </Heading>
  ),
  heading4: ({ children }) => (
    <Heading as="h4" size="md">
      {children}
    </Heading>
  ),
  heading5: ({ children }) => (
    <Heading as="h5" size="sm">
      {children}
    </Heading>
  ),
  heading6: ({ children }) => (
    <Heading as="h6" size="xsm">
      {children}
    </Heading>
  ),
  oList: ({ children }) => <ol className="">{children}</ol>,
  oListItem: ({ children }) => (
    <li>
      <Paragraph>{children}</Paragraph>
    </li>
  ),
  list: ({ children }) => <ul>{children}</ul>,
  listItem: ({ children }) => (
    <li>
      <Paragraph>{children}</Paragraph>
    </li>
  ),
  preformatted: ({ children }) => (
    <pre className="">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink field={node.data} className="">
      {children}
    </PrismicLink>
  ),
};

const NextLinkShim = ({ href, children, locale, ...props }) => {
  return (
    <Link href={href} locale={locale} legacyBehavior>
      <a {...props}>{children}</a>
    </Link>
  );
};

export default function App({ Component, pageProps }) {
  const el = useRef();
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useLayoutEffect(() => {
    let smoother = ScrollSmoother.create({
      smooth: 0.35, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
    });
    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <>
      <Preloader />
      <Timer />
      <div ref={el} id="smooth-wrapper">
        <div id="smooth-content">
          <PrismicProvider
            linkResolver={linkResolver}
            internalLinkComponent={NextLinkShim}
            richTextComponents={richTextComponents}
          >
            <Component {...pageProps} />
            <PrismicPreview repositoryName={repositoryName} />
          </PrismicProvider>
        </div>
      </div>
    </>
  );
}
