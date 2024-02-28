import { PrismicRichText } from "@prismicio/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

/**
 * @typedef {import("@prismicio/client").Content.NavigationSlice} NavigationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavigationSlice>} NavigationProps
 * @param {NavigationProps}
 */
const Navigation = ({ slice }) => {
  const container = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // gsap code here...
        gsap.to(container.current, {
          scrollTrigger: {
            trigger: ".navigation",
            start: "top top",
            endTrigger: ".contact",
            pin: true,
            pinType: "fixed",
            // markers: true,
            pinReparent: true,
            pinSpacing: false,
          },
        }); // <-- automatically reverted
      });
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <nav className="navigation" ref={container}>
      <div className="navigation_headline">
        <PrismicRichText field={slice.primary.headline} />
      </div>

      <div className="navigation_description">
        <PrismicRichText field={slice.primary.description} />
      </div>

      <div className="navigation_buttons">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf4LijFdvTPoy2JTwvFnYcyz0OXk1bnitbdkqr4TsE0GdKRlQ/viewform?usp=send_form"
          target="_blank"
          className="navigation_button"
        >
          Confirmar Presença
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
