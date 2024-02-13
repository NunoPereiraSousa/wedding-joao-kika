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
          <PrismicNextLink field={slice.primary.email}>
            <PrismicRichText field={slice.primary.email_text} />
          </PrismicNextLink>
          <PrismicNextLink field={slice.primary.mobile_phone}>
            <PrismicRichText field={slice.primary.mobile_phone_text} />
          </PrismicNextLink>
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
                  perPage: 3,
                  gap: "10px",
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
