import React from "react";
import { ProgressBar } from "./ProgressBar";
import { Tag } from "./Tag";

export const SkillWidget = ({ color, percentValue = "55", fontColor }) => {
  return (
    <div>
      <ProgressBar
        color={color}
        percentValue={percentValue}
        fontColor={fontColor}
      />
      <Tag text="Engineer" />
    </div>
  );
};
