import React from "react";

export const TimelineVertical = ({
  radius = "40",
  height = "10px",
  width = "15px",
  fill = "white",
  fillBig = "black",
  lineColor = "gray",
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "60px",
          margin: "0 5rem",
        }}
      >
        <div style={{ width: width, height: height, margin: "0 auto" }}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="white"
              stroke="white"
              strokeWidth="24px"
            />
          </svg>
        </div>

        <div
          style={{
            width: "10px",
            height: "10px",
            margin: "0 auto",
            zIndex: "-1",
          }}
        >
          <svg viewBox="0 0 100 1000" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="50"
              y1="0"
              x2="50"
              y2="550"
              fill="white"
              stroke="white"
              strokeWidth="32"
            />
          </svg>
        </div>

        <div
          style={{
            width: "15px",
            height: height,
            marginTop: "30px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="white"
              stroke="white"
              strokeWidth="24px"
            />
          </svg>
        </div>

        


      </div>
    </>
  );
};
