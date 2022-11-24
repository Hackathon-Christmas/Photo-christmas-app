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
    <div>
      <Snowfall style={{ height: "200vh" }} />
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
          reset={setIsCompleted}
        />
      </div>
      {textValue === null && (
        <h3 className="instructions">Fill the Message First!!</h3>
      )}
      {isCompleted && textValue !== null && (
        <div className="final-result">
          <h2>Your Card is ready</h2>
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
