import React, { useState } from "react";

export const Switch = ({
  primaryBackground = "orange",
  secondaryBackground = "green",
  primaryDotColour = "#fff",
  secondaryDotColour = "#fff",
  width = "100px",
  vertical = "false",
  height = "40px",
}) => {
  const [toggled, setToggled] = useState(false);

  return (
    <div style={{transform: vertical ? "" : "rotate(90deg)" , display:"inline-block" }}>
      <div
        onClick={() => setToggled(!toggled)}
        style={{
          width: width,
          color: "#fff",
          height: height,
          background: toggled ? secondaryBackground : primaryBackground,
          borderRadius: "30px",
          position: "relative",
        }}
      >
        <div
          style={{
            background: "#fff",
            width: "30px",
            height: "30px",
            backgroundColor: toggled ? primaryDotColour : secondaryDotColour,
            borderRadius: "100%",
            position: "absolute",
            top: "5px",
            left: "5px",
            transition: "0.5s all ease",
            transform: toggled ? "translateX(60px)" : "",
          }}
        ></div>
      </div>
    </div>
  );
};
