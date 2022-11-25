/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import Camera from "../components/Camera/Camera";
import "./Feature.css";
import MoreCardButton from "../components/MoreCardButton/MoreCardButton";
import CardsLibrary from "../components/CardsLibrary/CardsLibrary";
import "primeicons/primeicons.css";
import Snowfall from "react-snowfall";
import Print from "../components/Print/Print";

export default function Feature() {
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [textValue, setTextValue] = useState(null);
  const [photoValue, setphotoValue] = useState(null);
  const [chooseBackground, setChooeseBackground] = useState(null);
  const [isCompleted, setIsCompleted] = useState(null);
  return (
    <div className="feature-bg">
      <Snowfall style={{ height: "250vh" }} />
      <div className="app-left-side">
        <MoreCardButton whenClicked={setIsLibraryOpen} />
        {isLibraryOpen && (
          <CardsLibrary
            choose={setChooeseBackground}
            choosedBackground={chooseBackground}
          />
        )}
        <Camera
          photo={setphotoValue}
          whenClick={setIsCompleted}
          text={setTextValue}
          textValue={textValue}
          reset={setIsCompleted}
        />
      </div>
      {isCompleted && textValue !== null && (
        <div className="final-result">
          <h2 className="card-ready">Your card is ready🎄</h2>
          <Print
            obj={{
              background: chooseBackground,
              photo: photoValue,
              text: textValue,
            }}
          />
        </div>
      )}
    </div>
  );
}
