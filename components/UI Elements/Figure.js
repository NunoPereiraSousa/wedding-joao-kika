import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { useRef, useContext } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Figure({
  figureClassName,
  imageClassName,
  url,
  alt,
  speed = 1,
  clamp = 1.1,
}) {
  const element = useRef(null);
  const reveal = useRef(null);
  const figure = useRef(null);

  //   useGSAP(
  //     () => {
  //       let tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: element.current,
  //         },
  //         delay: 0.5,
  //       });

  //       tl.from(reveal.current, {
  //         yPercent: -100,
  //         duration: speed,
  //       });
  //     },
  //     { scope: element }
  //   );

  return (
    <div className="container" ref={element}>
      <div className="reveal" ref={reveal}>
        <figure className={figureClassName} ref={figure}>
          <img
            src={url}
            alt={alt}
            className={imageClassName}
            data-speed={`clamp(${clamp})`}
          />
        </figure>
      </div>
    </div>
  );
}
