/* eslint-disable react/prop-types */
import React from "react";
import "./MessageSection.css";

function MessageSection({ text, reset }) {
  return (
    <div className="section-wrap">
      <textarea
        className="text-area"
        onChange={(e) => {
          reset(false);
          text(e.target.value);
        }}
      />
    </div>
  );
}

export default MessageSection;
