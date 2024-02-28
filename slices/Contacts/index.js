import { PrismicNextLink } from "@prismicio/next";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

/**
 * @typedef {import("@prismicio/client").Content.ContactsSlice} ContactsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactsSlice>} ContactsProps
 * @param {ContactsProps}
 */
const Contacts = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="contact"
    >
      <div className="contact_wrapper">
        <div className="contact_headline">
          <PrismicRichText field={slice.primary.headline} />
        </div>

        <div className="contact_contacts">
          <div className="contact_contacts_info">
            <a href="mailto:franciscacaetanopereira@hotmail.com@gmail.com">
              franciscacaetanopereira@hotmail.com
            </a>
            <p> |</p>
            <a href="tel:+351914229928">914229928</a>
          </div>
          <div className="contact_contacts_info">
            <a href="mailto:jramalho1990@gmail.com">jramalho1990@gmail.com</a>
            <p> |</p>
            <a href="tel:+351927747812">927747812</a>
          </div>
        </div>

        <div className="contacts_gallery">
          <Splide
            options={{
              type: "loop",
              drag: "free",
              arrows: false,
              pagination: false,
              breakpoints: {
                1920: {
                  perPage: 6,
                },
                1025: {
                  perPage: 4,
                  gap: "10px",
                },
                800: {
                  perPage: 2,
                },
              },
              autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: false,
                speed: -1,
              },
            }}
            extensions={{ AutoScroll }}
          >
            {slice.items?.map((item, index) => (
              <SplideSlide key={index}>
                <figure className="contacts_gallery_figure">
                  <img
                    src={item.image.url}
                    alt={item.image.alt}
                    className="contacts_gallery_image"
                  />
                </figure>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
