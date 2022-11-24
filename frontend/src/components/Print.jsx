/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
import React, { useRef } from "react";

const ComponentToPrint = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className="final-card"
    style={{ backgroundImage: `url(${props.obj.background})` }}
  >
    <div>
      <img className="final-img" src={props.obj.photo} alt="charactar" />
    </div>
    <div className="icon-wrap">{props.obj.text}</div>
  </div>
));

function MyComponent({ obj }) {
  const componentRef = useRef();

  return (
    <>
      <ComponentToPrint obj={obj} ref={componentRef} />
      <button onClick={() => exportComponentAsJPEG(componentRef)}>
        Export As JPEG
      </button>
      <button onClick={() => exportComponentAsPDF(componentRef)}>
        Export As PDF
      </button>
      <button onClick={() => exportComponentAsPNG(componentRef)}>
        Export As PNG
      </button>
    </>
  );
}

export default MyComponent;
