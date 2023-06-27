import React from "react";

export function Buttons() {
  function handleClick(event) {
    this.setState({ currentAudio: event.id });
    let audio = document.getElementsByClassName("clip");
    audio.play();
  }
  return (
    <div id="Buttons">
      <button id="Heater-1" class="drum-pad" onClick={handleClick}>
        Q
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          class="clip"
          id="Q"
        ></audio>
      </button>

      <button id="Heater-2" class="drum-pad" onClick={handleClick}>
        W
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          class="clip"
          id="W"
        ></audio>
      </button>

      <button id="Heater-3" class="drum-pad" onClick={handleClick}>
        E
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          class="clip"
          id="E"
        ></audio>
      </button>

      <button id="Heater-4" class="drum-pad" onClick={handleClick}>
        A
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          class="clip"
          id="A"
        ></audio>
      </button>

      <button id="Heater-6" class="drum-pad" onClick={handleClick}>
        S
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          class="clip"
          id="S"
        ></audio>
      </button>

      <button id="Dsc-Oh" class="drum-pad" onClick={handleClick}>
        D
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          class="clip"
          id="D"
        ></audio>
      </button>

      <button id="Kick-n-Hat" class="drum-pad" onClick={handleClick}>
        Z
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          class="clip"
          id="Z"
        ></audio>
      </button>

      <button id="RP4-KICK-1" class="drum-pad" onClick={handleClick}>
        X
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          class="clip"
          id="X"
        ></audio>
      </button>

      <button id="Cev-H2" class="drum-pad" onClick={handleClick}>
        C
        <audio
          src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          class="clip"
          id="C"
        ></audio>
      </button>
    </div>
  );
}
