import Figure from "@/components/UI Elements/Figure";
import SectionDelimiter from "@/components/UI Elements/SectionDelimiter";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const Hero = ({ slice }) => {
  console.log(slice.primary.button_text);
  return (
    <section className="hero" id="hero">
      <div className="hero_top">
        <div className="hero_headline">
          <PrismicRichText field={slice.primary.headline} />
        </div>

        <div className="hero_posters">
          <Splide
            options={{
              type: "loop",
              drag: "free",
              arrows: false,
              pagination: false,
              breakpoints: {
                1920: {
                  perPage: 5,
                },
                1025: {
                  gap: "10px",
                },
                800: {
                  perPage: 2,
                },
              },
              autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: false,
                speed: -0.4,
              },
            }}
            extensions={{ AutoScroll }}
          >
            {slice.items?.map((item, index) => (
              <SplideSlide key={index}>
                <figure className="hero_figure" key={index}>
                  <img
                    src={item.poster.url}
                    alt={item.poster.alt}
                    className="hero_image"
                  />
                </figure>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      <SectionDelimiter
        number={"01"}
        text={slice.primary.section_description[0].text}
      />

      <div className="hero_gallery">
        <div className="hero_gallery_column">
          <Figure
            figureClassName={"hero_gallery_left_figure"}
            imageClassName={"hero_gallery_left_image"}
            url={slice.primary.left_image.url}
            alt={slice.primary.left_image.alt}
          />

          <PrismicLink
            className="hero_button"
            href={slice.primary.button_link.url}
            target="_blank"
          >
            {slice.primary.button_text}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="57"
              height="52"
              viewBox="0 0 57 52"
              fill="none"
            >
              <path
                d="M55.7009 0H51.034C50.6918 0 50.4118 0.273261 50.4118 0.607246V39.9264H12.6102V34.3853C12.6102 33.8767 12.0035 33.5883 11.599 33.9071L0.561899 42.4086C0.487526 42.4654 0.427378 42.5379 0.386013 42.6208C0.344648 42.7036 0.323151 42.7946 0.323151 42.8868C0.323151 42.9789 0.344648 43.0699 0.386013 43.1527C0.427378 43.2356 0.487526 43.3082 0.561899 43.365L11.599 51.8664C12.0113 52.1852 12.6102 51.8968 12.6102 51.3882V45.6953H51.3452C56.8517 45.6953 56.3232 46.0444 56.3232 43.365V0.607246C56.3232 0.273261 56.0431 0 55.7009 0Z"
                fill="#FBF5E7"
              />
            </svg>
          </PrismicLink>
        </div>
        <Figure
          figureClassName={"hero_gallery_right_figure"}
          imageClassName={"hero_gallery_right_image"}
          url={slice.primary.right_image.url}
          alt={slice.primary.right_image.alt}
        />
      </div>
    </section>
  );
};

export default Hero;
