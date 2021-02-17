import React from "react";

import "./LineWidget.css";

export const LineWidget = (props) => {
  const { widgetYear, widgetTitle } = props;
  const { widgetLineWidth } = props || "0%";
  return (
    <>
      <span className="year-marker">{widgetYear}</span>
      <div className="line" style={{ "width": widgetLineWidth }}></div>
      <p className="story-year-text">{widgetTitle}</p>
      {props.children}
    </>
  );
};
