import { useState, useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { wheelLogoImagesData } from "./wheelLogoImagesData";
import { WheelContext } from "../Contexts/wheelStateContext";
import "./Wheel.css";

function Wheel() {
  const [rotation, setRotation] = useState(0);
  const [swapButton, setSwapButton] = useState(false);
  const { wheelHandler } = useContext(WheelContext);

  const startSpin = () => {
    counter();
    setSwapButton(true);
    setRotation(Math.floor(Math.random() * 361) + 1000 + rotation);
  };

  const wheelStyles = {
    transform: `rotate(${rotation}deg)`,
    transition: "all 6s",
    cursor: "pointer",
  };

  const [count, setCount] = useState(0);

  const counter = () => {
    setCount((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (rotation !== 0) {
      setTimeout(() => {
        let rotationNum = rotation;
        while (rotationNum > 360) {
          rotationNum -= 360;
        }
        if (rotationNum < 30) {
          wheelHandler("aldrig");
        } else if (rotationNum < 60) {
          wheelHandler("body");
        } else if (rotationNum < 90) {
          wheelHandler("yoga");
        } else if (rotationNum < 120) {
          wheelHandler("pest");
        } else if (rotationNum < 150) {
          wheelHandler("functional");
        } else if (rotationNum < 180) {
          wheelHandler("gym");
        } else if (rotationNum < 210) {
          wheelHandler("aldrig");
        } else if (rotationNum < 240) {
          wheelHandler("body");
        } else if (rotationNum < 270) {
          wheelHandler("yoga");
        } else if (rotationNum < 300) {
          wheelHandler("pest");
        } else if (rotationNum < 330) {
          wheelHandler("functional");
        } else if (rotationNum < 360) {
          wheelHandler("gym");
        }
        setCount(0);
        setSwapButton(false);
      }, 6000);
      return console.log("cleanup");
    }
  }, [rotation, wheelHandler]);

  return (
    <>
      <div style={{ position: "relative", marginTop: "30px" }}>
        <center>
          <ArrowDownwardIcon
            style={{
              position: "relative",
              zIndex: "999",
              color: "white",
              marginBottom: "-20px",
              fontSize: "50px",
            }}
          />
        </center>

        <ul style={wheelStyles} className="circle">
          {wheelLogoImagesData.map((item, i) => (
            <li key={i}>
              <div className="text">
                <img alt="" style={{ width: "80px" }} src={item.picture} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: "10px", textAlign: "center" }}>
        {!swapButton ? (
          <Button
            style={{ fontWeight: "900" }}
            onClick={startSpin}
            variant="contained"
            color="primary">
            Spin
          </Button>
        ) : (
          <Button
            style={{ fontWeight: "900" }}
            onClick={counter}
            variant="contained"
            color="primary">
            Spin ({count})
          </Button>
        )}
      </div>
    </>
  );
}

export default Wheel;
