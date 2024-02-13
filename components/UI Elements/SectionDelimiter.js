import React from "react";

export default function SectionDelimiter({ number, text }) {
  return (
    <div className="delimiter">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2000"
        height="2"
        viewBox="0 0 2000 2"
        fill="none"
        className="delimiter_vector"
      >
        <path
          d="M0 1L2000 0.999891"
          stroke="#BB4B36"
          stroke-width="2"
          stroke-dasharray="6 6"
        />
      </svg>

      <div className="delimiter_information">
        <div className="delimiter_number">
          <p className="paragraph">{number}</p>
        </div>

        <div className="delimiter_text">
          <p className="paragraph">{text}</p>
        </div>
      </div>
    </div>
  );
}
