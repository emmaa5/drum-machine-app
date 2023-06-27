import logo from "./logo.svg";
import "./App.css";
import "./Buttons.js";
import { Buttons } from "./Buttons.js";
import bootstrap from "bootstrap";
import React from "react";

function App() {
  const [state, setState] = React.useState({
    currentAudio: "Press any of the buttons",
  });

  return (
    <div className="App">
      <header>
        <h1>Drum machine</h1>
        <p id="description">
          By <a href="http://">Emma</a> for{" "}
          <a href="http://">Freecodecamp front end libraries and frameworks</a>{" "}
          certificate project
        </p>
      </header>
      <main id="drum-machine" className="container d-flex">
        <div id="display">{state.currentAudio}</div>
        <Buttons />
      </main>
    </div>
  );
}

export default App;
