/* eslint-disable no-bitwise */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Webcam from "react-webcam";
import { BsCameraFill } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import MessageSection from "../MessageSection/MessageSection";
import "./Camera.css";

const videoConstraints = {
  width: 600,
  height: 400,
  facingMode: "user",
};

export default function Camera({ whenClick, photo, text, reset }) {
  const webcamRef = React.useRef(null);
  const [picture, setPicture] = React.useState(null);

  const capture = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPicture(imageSrc);
  }, [webcamRef]);

  const clickHandler = () => {
    capture();
    whenClick(() => true);
  };

  {
    (picture !== null) & photo(picture);
  }
  return (
    <div className="webcam-container">
      <div className="webcam">
        <Webcam
          ref={webcamRef}
          audio={false}
          mirrored
          screenshotFormat="image/jpeg"
          height={400}
          width={600}
          videoConstraints={videoConstraints}
        />
        <div className="buttons">
          <button
            className="camera-button"
            type="button"
            onClick={clickHandler}
          >
            <BsCameraFill className="camera-icon" />
          </button>
          <button
            className="refresh-button"
            type="button"
            onClick={() => setPicture(null)}
          >
            <BiRefresh className="refresh-icon" />
          </button>
        </div>
        <div>
          <MessageSection reset={reset} text={text} />
        </div>
      </div>
    </div>
  );
}
