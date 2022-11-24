/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <div className="icon-wrap">
        <i className="pi pi-camera" />
      </div>
      <div className="icon-wrap">
        <i className="pi pi-pencil" />
      </div>
    </div>
  );
}

export default Card;
