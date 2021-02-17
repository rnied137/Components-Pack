import React from "react";
import { CustomButton } from "./CustomButton";
import { LineWidget } from "./LineWidget";

import "./Story.css";
import { TrackStory } from "./TrackStory";


export const Story = ({widgetLineWidth, widgetTitle, widgetYear, title, text, children}) => {
  return (
    <div className="container">
      <div className="story">
        <div className="left-story">
        <LineWidget widgetLineWidth={widgetLineWidth}
                    widgetTitle={widgetTitle}
                    widgetYear={widgetYear}/>
        </div>
        <div className="right-story">
         <TrackStory title={title} text={text}/>
        <CustomButton/>
        </div>
      </div>
    </div>
  );
};
