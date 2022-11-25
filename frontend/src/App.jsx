/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-empty */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-syntax */
import { useState } from "react";
import Home from "./pages/Home";
import Feature from "./pages/Feature";

import "./App.css";

function App() {
  const [removeFinal, setRemoveFinal] = useState(false);
  const [isCompleted, setIsCompleted] = useState(null);

  console.log(isCompleted);
  const removeResults = () => {
    if (isCompleted === true) {
      const response = confirm(
        "Your Card will be lost, Press the button on the bottom to save it as photo"
      );
      if (response === true) {
        setRemoveFinal(true);
        location.reload();
      }
    } else {
    }
  };

  return (
    <div className="App" onClick={() => removeResults()}>
      <Home />
      <Feature
        remove={removeFinal}
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
      />
    </div>
  );
}

export default App;
