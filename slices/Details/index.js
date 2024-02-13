import Figure from "@/components/UI Elements/Figure";
import SectionDelimiter from "@/components/UI Elements/SectionDelimiter";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.DetailsSlice} DetailsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DetailsSlice>} DetailsProps
 * @param {DetailsProps}
 */
const Details = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="details"
      id="details"
    >
      <SectionDelimiter
        number={"02"}
        text={slice?.primary.section_description[0].text}
      />

      <div className="details_grid">
        {slice?.items.map((item, index) => (
          <div className="details_card" key={index}>
            <div className="details_card_time">
              <PrismicRichText field={item.time} />
            </div>

            <div className="details_card_line"></div>

            <div className="details_card_description">
              <PrismicRichText field={item.description} />
            </div>
            <Figure
              figureClassName={"details_card_figure"}
              imageClassName={"details_card_image"}
              url={item.image.url}
              alt={item.image.alt}
              clamp={0.9}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Details;
