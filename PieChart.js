import React, { useState, useEffect } from "react";

import "./PieChart.css";

import { motion } from "framer-motion";

export const PieChart = ({
  initialValues = [15, 31, 221, 5, 15],
  initialValuesLabels = ["", "", "", "", ""],
}) => {
  const cx = 150;
  const cy = 150;
  const radius = 80;
  const strokeWidth = 35;
  const colors = [
    "#6495ED",
    "purple",
    "#cd5c5c",
    "blue",
    "lightgreen",
    "orange",
    "teal",
    "black",
    "yellow",
  ];
  const circumference = 2 * Math.PI * radius;
  const adjustedCircumference = circumference - 4;
  let sortedValues = [];
  let dataTotal = 0;
  let angleOffset = -90;
  let chartData = [];
  const [circleTransform, setCircleTransform] = useState([]);
  const [strokeDashOffset, setStrokeDashOffset] = useState([]);
  const [hoveredItems, setHoveredItems] = useState([]);
  const [chartValues, setChartValues] = useState([]);

  //hover className="onhover"  {circleTransform[index]} and scale

  useEffect(() => {
    const size = initialValues.length;
    let items = [];
    for (let i = 0; i < size; i++) {
      items.push(false);
    }
    setHoveredItems(items);

    sortedValues = initialValues.sort((a, b) => b - a);
    dataTotal = sortedValues.reduce((acc, val) => acc + val);
    sortedValues.forEach((dataVal, index) => {
      chartData.push(angleOffset);
      angleOffset = (dataVal / dataTotal) * 360 + angleOffset;

      console.log(hoveredItems);
    });
    setChartValues(sortedValues);
    let strokeArray = [];
    sortedValues.forEach((data, index) => {
      const strokeDirr = (data / dataTotal) * circumference;
      console.log(strokeDirr);
      strokeArray.push(circumference - strokeDirr);
    });
    setStrokeDashOffset(strokeArray);

    let rotateArray = [];
    sortedValues.forEach((data, index) => {
      const rotate = `rotate(${chartData[index]}, ${cx}, ${cy})`;
      rotateArray.push(rotate);
    });
    setCircleTransform([...rotateArray]);

    console.log(rotateArray);
    return () => {
      console.log("cleanup");
    };
  }, [initialValues]);

  const handleCurrentItemHover = (index) => {
    let items = hoveredItems;
    items.fill(false);
    items[index] = !hoveredItems[index];
    setHoveredItems([...items]);
  };

  return (
    <div className="pie-chart">
      <h2>Expenses</h2>
      <span>Total: ${initialValues.reduce((a, b) => a + b)} </span>
      <svg height="300" width="300" viewBox="0 0 300 300">
        {strokeDashOffset.map((value, index) => (
          <g key={index + value}>
            <motion.circle
              cx={cx}
              cy={cy}
              r={radius}
              key={value}
              stroke={colors[index]}
              strokeWidth={strokeWidth}
              strokeDasharray={adjustedCircumference}
              strokeDashoffset={value}
              transform={
                hoveredItems[index]
                  ? `${circleTransform[index]} scale(1.1)`
                  : `${circleTransform[index]}`
              }
              fill="none"
              onClick={() => handleCurrentItemHover(index)}
            />

            {hoveredItems[index] && (
              <text
                font-size="2em"
                fontWeight="bold"
                style={{ color: "#fff", textAlign: "center" }}
                x={cx - 50}
                y={cy}
              >
                $ {chartValues[index]}
              </text>
            )}

            {hoveredItems[index] && (
              <text fill="grey"
               x={cx - 35}
                y={cy + 30}
                >
                {initialValuesLabels[index]}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
};
