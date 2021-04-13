import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { WheelProvider } from "./Contexts/wheelStateContext";

ReactDOM.render(
  <React.StrictMode>
    <WheelProvider>
      <App />
    </WheelProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
