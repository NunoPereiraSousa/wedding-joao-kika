import { PrismicRichText } from "@prismicio/react";
import { useRef, useState } from "react";

const AccordionItem = ({ question, answer, onClick, isOpen }) => {
  const contentHeight = useRef();

  return (
    <div className={`faq_item ${isOpen ? "active" : ""}`} onClick={onClick}>
      <div className="faq_item_show">
        <div className="faq_item_question">
          <PrismicRichText field={question} />
        </div>

        <div className="faq_vector">
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#FBF5E7" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="2"
              viewBox="0 0 14 2"
              fill="none"
            >
              <path d="M14 2H8H6H0V0H6H8H14V2Z" fill="#FBF5E7" />
            </svg>
          )}
        </div>
      </div>

      <div
        className="faq_item_answer"
        ref={contentHeight}
        style={
          isOpen
            ? {
                height: contentHeight.current.scrollHeight,
                visibility: "visible",
                opacity: 1,
                paddingTop: "3rem",
                paddingBottom: "4.4rem",
              }
            : {
                height: "0px",
                visibility: "hidden",
                opacity: 0,
                paddingTop: "0",
                paddingBottom: "0",
              }
        }
      >
        <PrismicRichText field={answer} />
      </div>
    </div>
  );
};

export default AccordionItem;
