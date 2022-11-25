/* eslint-disable react/prop-types */
import React from "react";
import "./MessageSection.css";

function MessageSection({ text, reset, textValue }) {
  return (
    <div className="section-wrap">
      <textarea
        className="text-area"
        onChange={(e) => {
          reset(false);
          text(e.target.value);
        }}
      />
      {textValue === null && (
        <h3 className="instructions">Fill the Message First!!</h3>
      )}
    </div>
  );
}

export default MessageSection;
