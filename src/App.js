import "./App.css";
import ReadySetGo from "./ready_set_go/ReadySetGo";
// import Wheel from "./wheel/Wheel";
import styled from "styled-components";
import box from "./images/box.png";

const stepStyle = {
  position: "relative",
  backgroundColor: "white",
  width: "100%",
  height: "100%",
  scrollSnapAlign: "start",
  display: "grid",
  placeItems: "center",
  backgroundImage:
    "url(https://raw.githubusercontent.com/alexek1987/jagharaldrig_assets/master/backgrounds/bg.png)",
};

const Welcome = () => (
  <div id="welcome" style={stepStyle}>
    <GlowingText>
      <h1>Peklen XXX!</h1>
    </GlowingText>
    <img width="250px" src={box} alt="" />
    <p style={{ color: "white" }}>Swipa ner</p>
  </div>
);

const Step1 = () => (
  <div id="step1" style={stepStyle}>
    <TextContainer>
      <p>I</p>
      <h1>💦&nbsp;Såhär spelar du Peklen XXX!</h1>
    </TextContainer>
  </div>
);

const Step2 = () => (
  <div id="step2" style={stepStyle}>
    <TextContainer>
      <p>II</p>
      <h1>
        🍒&nbsp;Lägg samtliga kort i lådan igen.
        <br />
        <br />
        🍑&nbsp;Välj vem som ska börja dra ett kort.
      </h1>
    </TextContainer>
  </div>
);

const Step3 = () => (
  <div style={stepStyle} id="step3">
    <TextContainer>
      <p>III</p>
      <h1>
        🍭&nbsp;Läs upp kortet högt.
        <br />
        <br />
        🔥&nbsp;Alla får fundera på vem kortet beskriver bäst.
      </h1>
    </TextContainer>
  </div>
);

const Step4 = () => (
  <div style={stepStyle} id="step4">
    <TextContainer>
      <p>IV</p>
      <h1>🌭&nbsp;Använd timern och peka samtidigt när ljudet spelas.</h1>
    </TextContainer>
  </div>
);

const Step5 = () => (
  <div style={stepStyle} id="step5">
    <TextContainer>
      <p>V</p>
      <h1>🙈 &nbsp;Den som får flest pekningar på sig dricker.</h1>
    </TextContainer>
  </div>
);

const Play = () => (
  <div style={stepStyle} id="play">
    <TextContainer>
      <h1>Timer</h1>
    </TextContainer>
    <PlayContainer>
      <ReadySetGo />
    </PlayContainer>
  </div>
);

// const WheelOfFortune = () => (
//   <div style={stepStyle} id="wheel">
//     <TextContainer>
//       <h1>Spin the Wheel</h1>
//     </TextContainer>
//     <Wheel />
//     <p style={{ color: "white" }}>Swipa upp</p>
//   </div>
// );

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Welcome />
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <Step5 />
        <Play />
        {/* <WheelOfFortune /> */}
      </div>
    </div>
  );
}

export default App;

const TextContainer = styled.div`
  margin-left: 50px;
  margin-right: 50px;

  > h1 {
    font-family: "Londrina Solid", cursive;
    font-size: 1.5rem;
    text-align: justify;
    line-height: 1.5;
    color: rgb(255 255 255);
  }

  > p {
    margin-bottom: 20px;
    font-family: "Londrina Solid", cursive;
    color: white;
    text-align: center;
    font-size: 3em;
  }
`;

const PlayContainer = styled.div`
  margin-top: -200px;
`;

const GlowingText = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  > h1 {
    font-family: "Londrina Solid", cursive;
    min-height: 100%;
    display: flex;
    margin-top: 20px;
    font-size: 2.6rem;
    line-height: 1.3;
    color: rgb(255 255 255);
    animation: neon 0.08s ease-in-out infinite alternate;
  }
  @keyframes neon {
    from {
      text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),
        0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(30, 132, 242, 0.52),
        0 0 21px rgba(30, 132, 242, 0.92), 0 0 34px rgba(30, 132, 242, 0.78),
        0 0 54px rgba(30, 132, 242, 0.92);
    }
    to {
      text-shadow: 0 0 6px rgba(202, 228, 225, 0.98),
        0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(30, 132, 242, 0.58),
        0 0 22px rgba(30, 132, 242, 0.84), 0 0 38px rgba(30, 132, 242, 0.88),
        0 0 60px rgba(30, 132, 242, 1);
    }
  }
  > p {
    font-family: "Kanit", sans-serif;
    color: white;
    text-align: justify;
    margin-top: 20px;
    font-size: 18px;
  }
`;
