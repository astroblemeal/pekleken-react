import React from "react";
import Go from "./go.mp3";
import Ready from "./ready.mp3";
import "./style.css";

function ReadySetGo() {
  const ReadySound = new Audio(Ready);
  const GoSound = new Audio(Go);

  const [text, setText] = React.useState("START");

  const onClickHandler = () => {
    setText("☝️");
    ReadySound.play();

    setTimeout(() => {
      ReadySound.play();
      setText("✌️");

      setTimeout(() => {
        ReadySound.play();
        setText("👌");

        setTimeout(() => {
          GoSound.play();
          setText("PEKA");

          setTimeout(() => {
            setText("START");
          }, 5000);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  const backgroundColor = () =>
    text === "START"
      ? "#1b2c52"
      : text === "✌️"
      ? "#d4395b"
      : text === "👌"
      ? "#fcc82d"
      : text === "PEKA"
      ? "#57c443"
      : "purple";

  const buttonStyles = {
    fontSize: "50px",
    borderRadius: "50%",
    height: "300px",
    fontFamily: "Londrina Solid, cursive",
    width: "300px",
    outline: "none",
    border: "none",
    // border: "10px solid black",
    backgroundColor: backgroundColor(),
  };

  return (
    <button className="shadow" style={buttonStyles} onClick={onClickHandler}>
      {text}
    </button>
  );
}

export default ReadySetGo;
