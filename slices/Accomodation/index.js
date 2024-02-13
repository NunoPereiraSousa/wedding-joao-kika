import Figure from "@/components/UI Elements/Figure";
import SectionDelimiter from "@/components/UI Elements/SectionDelimiter";
import { PrismicRichText } from "@prismicio/react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

/**
 * @typedef {import("@prismicio/client").Content.AccomodationSlice} AccomodationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AccomodationSlice>} AccomodationProps
 * @param {AccomodationProps}
 */
const Accomodation = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="accommodation"
    >
      <SectionDelimiter
        number={"03"}
        text={slice?.primary.section_description[0].text}
      />

      <div className="accommodation_slider">
        <Splide
          className="accommodation_slider_item"
          options={{
            type: "loop",
          }}
        >
          {slice.items?.map((item, index) => (
            <SplideSlide key={index}>
              <div className="accommodation_slider_name">
                <PrismicRichText field={item.name} />
              </div>
              <Figure
                figureClassName={"accommodation_slider_figure"}
                imageClassName={"accommodation_slider_image"}
                url={item.image.url}
                alt={item.image.alt}
                clamp={0.9}
              />
            </SplideSlide>
          ))}
        </Splide>
        {/* <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 8L16.0896 16L14.8031 14.701L20.5218 8.9187L-3.89849e-07 8.9187L-3.09534e-07 7.0813L20.5218 7.08131L14.8031 1.30087L16.0896 -3.45772e-07L24 8Z"
                  fill="#FBF5E7"
                />
              </svg>
            </button>
            <button className="splide__arrow splide__arrow--next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M-3.49691e-07 8L7.91035 -2.25312e-06L9.19694 1.29903L3.47816 7.0813L24 7.0813L24 8.91869L3.47816 8.91869L9.19694 14.6991L7.91035 16L-3.49691e-07 8Z"
                  fill="#FBF5E7"
                />
              </svg>
            </button>
          </div> */}
      </div>

      <p className="accommodation_paragraph">
        Se pretende ficar num AirBnb próximo da Quinta{" "}
        <a href="#">clique aqui</a>
      </p>
    </section>
  );
};

export default Accomodation;
