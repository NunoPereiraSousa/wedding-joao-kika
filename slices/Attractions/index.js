import Figure from "@/components/UI Elements/Figure";
import SectionDelimiter from "@/components/UI Elements/SectionDelimiter";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.AttractionsSlice} AttractionsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AttractionsSlice>} AttractionsProps
 * @param {AttractionsProps}
 */
const Attractions = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="attractions"
    >
      <SectionDelimiter
        number={"04"}
        text={slice?.primary.section_description[0].text}
      />

      <div className="attractions_grid">
        {slice?.items?.map((item, index) => (
          <div className="attractions_card" key={index}>
            <Figure
              figureClassName={"attractions_card_figure"}
              imageClassName={"attractions_card_image"}
              url={item.image.url}
              alt={item.image.alt}
              clamp={0.9}
            />

            <div className="attractions_card_name_box">
              <div className="attractions_card_name">
                <PrismicRichText field={item.name} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Attractions;
