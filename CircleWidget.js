import React, { useRef } from "react";

import "./CircleWidget.css";

export const CircleWidget = ({
  width = "400",
  height = "400",
  title = "",
  strokeWidth = "9",
  fillValue = "30",
  isRadioButton = false,
  isSelected = false,
  onClick,
  propColor = "#6f6fff",
  animation = "",
  className=""
}) => {
  const circleWidgetRef = useRef(null);

  const style = {
    "--fillValue": `${fillValue}`,
  };

  return (
    <div className="circle-svg" style={{ width: width, height: height }}>
      <svg viewBox="-4 -4 46 46">
        <path
          stroke="gray"
          strokeWidth="4.8"
          strokeOpacity="0.5"
          fill="none"
          strokeDasharray="70, 100"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        ></path>

        <path
          stroke="gray"
          strokeOpacity="0.4"
          strokeWidth="4.8"
          fill="none"
          strokeDasharray="90, 100"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        ></path>

        <path
          stroke="gray"
          strokeOpacity="0.3"
          strokeWidth="4.8"
          fill="none"
          strokeDasharray="100, 100"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        ></path>

        <path
          className={className}
          style={style}
          strokeWidth={strokeWidth}
          ref={circleWidgetRef}
          stroke={
            isRadioButton && isSelected
              ? propColor
              : isRadioButton && !isSelected
              ? "gray"
              : propColor
          }
          fill={isRadioButton ? "transparent" : "none"}
          strokeDasharray={`${fillValue}, 100`}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          onClick={onClick}
        ></path>
        <text x={12} y="20" style={{ fontSize: "8px", fontWeight: "bold" }}>
          {" "}
          {title}
          {!isRadioButton ? "k" : null}
        </text>
      </svg>
    </div>
  );
};
