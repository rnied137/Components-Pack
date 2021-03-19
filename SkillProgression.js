import React from "react";

import "./SkillProgression.css";

import { BiChevronRight as IconRight } from "react-icons/bi";

export const SkillProgression = ({
  percentValue = "62",
  max = "100",
  color = "purple",
  skillName = "ExampleText",
  dayDate = "01",
  month = "dayDate",
}) => {
  const style = {
    "--chartColor": `${color}`,
  };
  return (
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <span className="skill-progression-dayDate">{dayDate}</span>
        <span className="skill-progression-month">{month}</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems:"flex-start"
        }}
      >
        <span className="skill-progression-skillname">{skillName}</span>
        <div classNam="skill-progression-bar">
          <progress style={style} value={percentValue} max={max}></progress>
        </div>
      </div>

      <IconRight color="gray" size="2rem" />
    </div>
  );
};
