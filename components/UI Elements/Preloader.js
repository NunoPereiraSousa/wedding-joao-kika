import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { SplitText } from "gsap/dist/SplitText";
import FontFaceObserver from "fontfaceobserver";
import image from "../../public/ride.jpeg";

let loadingImages = require("imagesloaded");

const Preloader = ({ scroll }) => {
  gsap.registerPlugin(SplitText);
  console.log(scroll);

  const [fontLoaded, setFontLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const container = useRef();
  const counter = useRef();

  const Count = {
    val: 0,
  };
  const final = 2024;

  useGSAP(() => {
    let font1 = new FontFaceObserver("Playfair Display", {
      weight: 500,
    });
    let font2 = new FontFaceObserver("Neue Haas Grotesk Text Pro", {
      weight: 400,
    });

    Promise.all([font1.load(), font2.load()]).then(function (e) {
      console.log("fonts loaded");
      setFontLoaded(true);
    });

    let imgLoad = loadingImages(document.querySelectorAll("img"));

    imgLoad.on("done", function (instance) {
      console.log("images loaded");
      setImagesLoaded(true);
    });

    if (fontLoaded && imagesLoaded) {
      let childSplit = new SplitText(
        [".preloader_headline", ".preloader_text"],
        {
          type: "lines",
          linesClass: "line-child",
        }
      );
      let parentSplit = new SplitText(
        [".preloader_headline", ".preloader_text"],
        {
          type: "lines",
          linesClass: "line-parent",
        }
      );
      let tl = gsap.timeline();

      gsap.set([".preloader_headline", ".preloader_text"], {
        autoAlpha: 1,
      });

      gsap.set(childSplit.lines, {
        yPercent: -100,
      });

      tl.to(childSplit.lines, {
        yPercent: 0,
        stagger: 0.04,
        scrollTrigger: {
          trigger: container.current,
        },
        // ease: Power2.easeOut,
        duration: 1,
        delay: 0.75,
      });

      tl.to(Count, {
        delay: 2,
        val: final,
        roundProps: "val",
        duration: 2,
        ease: "expo.inOut",
        snap: 100,
        onUpdate: () => {
          gsap.to(counter.current, {
            xPercent: 80,
          });
          counter.current.innerHTML = Count.val.toFixed(0);
        },
      });

      tl.to([".preloader_info", ".preloader_counter"], {
        autoAlpha: 0,
        duration: 0.75,
        delay: 0.5,
        onComplete: () => {
          scroll.paused(false);
        },
      });

      tl.to(container.current, {
        scaleY: 0,
        transformOrigin: "0 0",
        ease: "expo.out",
        duration: 1,
      });
    }
  }, [fontLoaded, imagesLoaded]);

  return (
    <div className="preloader" ref={container}>
      <div className="preloader_info">
        <p className="preloader_headline paragraph">Welcome to our drive!</p>
        <figure className="preloader_figure">
          <img
            src={image.src}
            alt="Ride Joao e Kika"
            className="preloader_image"
          />
        </figure>
        <p className="preloader_text paragraph">
          mosteiro da serra do pilar
          <br />6 de julho de 2024 <br />
          15:30h
        </p>
      </div>

      <div className="preloader_counter">
        <div className="preloader_number_wrapper">
          <p className="preloader_number" ref={counter}>
            0
          </p>
        </div>
        <svg
          className="preloader_vector"
          xmlns="http://www.w3.org/2000/svg"
          width="1920"
          height="2"
          viewBox="0 0 1920 2"
          fill="none"
        >
          <path
            d="M0 1L1921 1.00017"
            stroke="white"
            stroke-width="2"
            stroke-dasharray="6 6"
          />
        </svg>
      </div>
    </div>
  );
};

export default Preloader;
