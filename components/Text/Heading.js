"use client";

import clsx from "clsx";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { useRef, useContext } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Heading({ as: Comp = "h1", size = "xxl", children }) {
  const element = useRef(null);
  gsap.registerPlugin(ScrollTrigger, SplitText);

  // useGSAP(
  //   () => {
  //     let childSplit = new SplitText(".heading", {
  //       type: "lines",
  //       linesClass: "line-child",
  //     });
  //     let parentSplit = new SplitText(".heading", {
  //       type: "lines",
  //       linesClass: "line-parent",
  //     });

  //     gsap.set(childSplit.lines, {
  //       yPercent: 100,
  //     });

  //     gsap.to(childSplit.lines, {
  //       yPercent: 0,
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         trigger: element.current,
  //       },
  //       duration: 0.6,
  //       delay: 0.75,
  //     });
  //   },
  //   { scope: element }
  // ); // <-- scope is for selector text (optional)

  return (
    <div ref={element}>
      <Comp
        className={clsx(
          "heading",
          size === "xxl" && "xxl",
          size === "xl" && "xl",
          size === "lg" && "lg",
          size === "md" && "md"
        )}
      >
        {children}
      </Comp>
    </div>
  );
}
