import React from "react";

export const Timeline = ({ stroke = "white", fill = "white" }) => {
  return (
    <div>
      <div style={{ width: "35px", height: "10px", margin: "0 auto" }}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="50"
            cy="50"
            r={22}
            fill="white"
            stroke="white"
            strokeWidth="24px"
          />
        </svg>
        
      </div>
     
    </div>
  );
};
