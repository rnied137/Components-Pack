import React, { useState, useEffect, useCallback } from "react";

import { CircleWidget } from "./CircleWidget";

import "./TopAgents.css";

export const TopAgents = ({
  chartSizeWidth = "300",
  chartSizeHeight = "300",
  chartColor = "purple",
}) => {
  const [selected, setSelected] = useState([true, false, false, false]);
  const [numbers] = useState([11, 55, 79, 90]);
  const [percents, setPercents] = useState([]);

  const [titles] = useState(["11", "55", "79", "90"]);

  const computeElementsValues = (sum) => {
    const percentValues = [];
    numbers.forEach((value) => {
      const percentValue = (value * 100) / sum;
      percentValues.push(Math.floor(percentValue));
    });

    setPercents(percentValues);
  };

  const setSelectedValues = () => {
    const selectedValues = [];
    numbers.forEach((val, index) => {
      const boolValue = index === 0 ? true : false;
      selectedValues.push(boolValue);
    });
    setSelected(selectedValues);
  };

  useEffect(() => {
    const sumOfNumbers = numbers.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    computeElementsValues(sumOfNumbers);

    return () => console.log("celanup");
  }, [numbers, computeElementsValues]);

  const changeState = (index) => {
    let states = [...selected];

    if (states[index] === true) return;
    let previousState = states[index];
    states[index] = !states[index];
    for (let i = 0; i < states.length; i++) {
      if (i !== index) {
        states[i] = previousState;
      }
    }
    setSelected([...states]);
  };
  return (
    <>
      <h2 className="top-agents-title">Top Agents / Offices</h2>
      <div className="top-agents-container">
        {selected.map((value, index) => {
          return value === true ? (
            <CircleWidget
              width={`${chartSizeWidth}px`}
              height={`${chartSizeHeight}px`}
              propColor={chartColor}
              fillValue={numbers[index]}
              key="0"
              title={titles[index]}
            />
          ) : null;
        })}
        <div className="top-agents-options-list">
          {numbers.map((val, index) => (
            <div className="top-agents-flex-item">
              <CircleWidget
                width="40px"
                height="40px"
                isRadioButton
                propColor={chartColor}
                isSelected={selected[index]}
                onClick={() => changeState(index)}
                fillValue="100"
                key="0"
              />
              <span className="top-agents-option-title">Andrew Haw</span>
              <span className="top-agents-bold-text">{titles[index]}k</span>
              <span className="top-agents-gray-text">({percents[index]}%)</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
