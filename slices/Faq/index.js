import AccordionItem from "@/components/UI Elements/AccordionItem";
import { PrismicRichText } from "@prismicio/react";
import { useState } from "react";
import gsap from "gsap";

/**
 * @typedef {import("@prismicio/client").Content.FaqSlice} FaqSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FaqSlice>} FaqProps
 * @param {FaqProps}
 */
const Faq = ({ slice }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="faq"
    >
      <div className="faq_wrapper">
        <div className="faq_headline">
          <PrismicRichText field={slice.primary.headline} />
        </div>

        <div className="faq_info">
          <div className="faq_items">
            {slice.items?.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={activeIndex === index}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>

          <figure className="faq_figure">
            <img
              src={slice.primary.image.url}
              alt={slice.primary.image.alt}
              className="faq_image"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Faq;
