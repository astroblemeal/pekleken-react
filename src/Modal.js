import useMediaQuery from "./useMediaQuery";
// import { useLocation } from "react-router-dom";

export default function Modal({ children, width, height, layout, closeModal }) {
  //   const location = useLocation();

  const isDesktop = useMediaQuery("(min-width: 768px)"),
    modalBgStyles = {
      width: "100vw",
      minHeight: "100vh",
      position: "fixed",
      top: "0",
      left: "0",
      zIndex: "999",
      display: "grid",
      placeItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalStyles = {
      maxWidth: isDesktop ? "600px" : "768px",
      width: isDesktop && width ? width : "100%",
      marginBottom: isDesktop && "70px",
      minHeight: isDesktop ? height || "fit-content" : "100vh",
      padding: "0.5em",
      backgroundColor: "#202026",
      background:
        "url(https://raw.githubusercontent.com/alexek1987/jagharaldrig_assets/master/backgrounds/spinner_modal_bg.png)",
      backgroundSize: "cover",
      borderRadius: isDesktop && "1em",
      position: "relative",
    },
    closeBtnStyles = {
      position: "absolute",
      top: "10px",
      right: "15px",
      backgroundColor: "transparent",
      border: "none",
      fontSize: "33px",
      fontWeight: "bold",
      color: "white",
    };

  return (
    <div style={modalBgStyles}>
      <div style={{ ...modalStyles, ...layout }}>
        <button style={closeBtnStyles} onClick={closeModal}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
