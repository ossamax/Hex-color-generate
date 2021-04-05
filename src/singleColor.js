import React, { useState } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const rgbs = rgb.join(",");
  const [alert, setAlert] = useState(false);
  const hex = rgbToHex(...rgb);

  const copyHex = () => {
    navigator.clipboard.writeText(hex);
    setAlert(true);
    setInterval(() => {
      setAlert(false);
    }, 500);
  };
  return (
    <div
      className="color"
      style={{ backgroundColor: `rgb(${rgbs})` }}
      onClick={copyHex}
    >
      <div className={index > 10 ? "weight white" : ""}>{weight} %</div>
      <div className={index > 10 ? "weight white" : ""}>{hex}</div>
      <div className={alert ? "alert white" : "alert"}>Copied !</div>
    </div>
  );
};

export default SingleColor;
