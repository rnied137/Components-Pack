import React from "react";

import "./ProgressBar.css";

export const ProgressBar = ({
  percentValue = "62",
  max = "100",
  color="lightblue",
  fontColor="white"

}) => {

  
  const style={
    "--chartColor":`${color}`
  }

  return (
    <>
      <progress style={style} value={percentValue} max={max}></progress>
      <span style={{color:fontColor}}className="percent-value">{percentValue}%</span>
    </>
  );
};
