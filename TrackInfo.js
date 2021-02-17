import React from "react";
import { CommunityIcons } from "./CommunityIcons";
import { CustomButton } from "./CustomButton";
import { LineWidget } from "./LineWidget";
import { TrackStory } from "./TrackStory";

export const TrackInfo = ({ title, text, widgetYear, widgetTitle }) => {
  return (
    <div className="flex gray column flex-1">
      <div className="m-5">
      <LineWidget
        widgetLineWidth="80%"
        widgetYear={widgetYear}
        widgetTitle={widgetTitle}
      />
      <TrackStory title={title} text={text} />
      <div className="m-top-2 flex flex-align-start">
        <CustomButton transparent>Visit the iTunes</CustomButton>
        <CommunityIcons
          likes="433"
          shares="132,33"
          messages="11,433"
          plays="1242,211"
        />
        </div>  
      </div>
    </div>
  );
};
