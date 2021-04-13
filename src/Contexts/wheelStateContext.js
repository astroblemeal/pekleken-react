import { createContext, useState } from "react";

export const WheelContext = createContext();

export const WheelProvider = (props) => {
  const initWheelContent = {
    yoga: false,
    gym: false,
    pest: false,
    aldrig: false,
    functional: false,
    body: false,
  };

  const [displayWheelContent, setDisplayWheelContent] = useState(
    initWheelContent
  );

  const wheelHandler = (name) => {
    if (name) {
      setDisplayWheelContent({ ...initWheelContent, [name]: true });
    } else {
      setDisplayWheelContent(initWheelContent);
    }
  };

  return (
    <WheelContext.Provider
      value={{ displayWheelContent, setDisplayWheelContent, wheelHandler }}
    >
      {props.children}
    </WheelContext.Provider>
  );
};
