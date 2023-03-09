import React from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ show, children }) => {
  const portalRoot = document.getElementById("portal");

  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="backdrop">{children}</div>,
    portalRoot
  );
};

export default Backdrop;
