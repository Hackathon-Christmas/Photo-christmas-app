/* eslint-disable react/prop-types */
import React from "react";
import "./MessageSection.css";

function MessageSection({ text }) {
  return (
    <div className="section-wrap">
      <textarea className="text-area" onChange={(e) => text(e.target.value)} />
    </div>
  );
}

export default MessageSection;