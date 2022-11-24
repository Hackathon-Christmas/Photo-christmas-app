/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import Camera from "../components/Camera/Camera";
import "./App.css";
import MoreCardButton from "../components/MoreCardButton/MoreCardButton";
import CardsLibrary from "../components/CardsLibrary/CardsLibrary";
import "primeicons/primeicons.css";
import MessageSection from "../components/MessageSection/MessageSection";
import Snowfall from "react-snowfall";
import FinalCard from "../components/FinalCard/FinalCard";

export default function Home() {
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [textValue, setTextValue] = useState(null);
  const [photoValue, setphotoValue] = useState(null);
  const [chooseBackground, setChooeseBackground] = useState(null);
  const [isCompleted, setIsCompleted] = useState(null);
  return (
    <div>
      <Snowfall />
      <div className="app-left-side">
        <MoreCardButton whenClicked={setIsLibraryOpen} />
        {isLibraryOpen && <CardsLibrary choose={setChooeseBackground} />}
      </div>
      <div className="app-right-side">
        <Camera photo={setphotoValue} whenClick={setIsCompleted} />
        <MessageSection text={setTextValue} />
      </div>
      {isCompleted && (
        <FinalCard
          obj={{
            background: chooseBackground,
            photo: photoValue,
            text: textValue,
          }}
        />
      )}
    </div>
  );
}
