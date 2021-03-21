import React, { useState, useEffect } from "react";

import "./CircleChart.css";

export const CircleChart = ({
  colors = [
    "rgb(252,69,73)",
    "rgb(44,201,252)",
    "blue",
    "orange",
    "lighthreen",
    "green",
    "purple",
    "lightblue",
  ],
  fillLevel = "50",
  text="$4500",
}) => {
    const style = {
        "--fillValue": `${fillLevel}`,
      };
  return (
    <div className="circle-svg">
      <svg viewBox="-4 -4 46 46">
        <path
          stroke="lightgray"
          strokeWidth="2.8"
          strokeOpacity="1"
          fill="none"
          strokeDasharray={`100, 100`}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        ></path>
        <path
        className="path-fill"
        style={style}
          stroke="rgb(26,197,167)"
          strokeWidth="1.8"
          strokeOpacity="1"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${fillLevel}, 100`}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        ></path>
        <text text-anchor="middle" style={{fontSize:"8px",textAlign:"center"}} x="42%" y="45%">{text}</text>
      </svg>
    </div>
  );
};
