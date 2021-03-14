import React from "react";
import { Card } from "./Card";

import { IoIosInformationCircle as InformationIcon } from "react-icons/io";

export const AbsenceBalance = () => {
  return (
    <Card>
      <p
        style={{
          color: "black",
          fontWeight: "600",
          fontFamily: "sans-serif",
          display: "inline-block",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        Absence Balance
      </p>
      <InformationIcon
        size="1.5rem"
        color="lightgray"
        style={{
          marginLeft: "0.5rem",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      />
      <div
        style={{
          height: "150px",
          filter:
            "drop-shadow(5px 5px 0px white) drop-shadow(-2px 2px 0px white) drop-shadow(5px -5px 0px white) drop-shadow(-5px -5px 0px white)",
        }}
      >
        <svg
          viewBox="-4 -4 46 46"
          style={{ margin: "20px 0", transform: "rotateZ(-90deg)" }}
        >
          <path

            stroke-linejoin="round"
            stroke="blue"
            strokeWidth="8.2"
            fill="none"
            strokeDasharray="50, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          ></path>

          <path

            stroke="orange"
            strokeWidth="8.4"
            fill="none"
            strokeDasharray="35, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          ></path>
          <path

            stroke="lightblue"
            strokeWidth="8.6"
            fill="none"
            strokeDasharray="20, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          ></path>
        </svg>
      </div>
    </Card>
  );
};
