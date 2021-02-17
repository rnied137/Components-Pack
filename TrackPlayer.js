import React from "react";

export const TrackPlayer = ({ url, title }) => {
  return (
    <div className="wrapper flex-1">
    <iframe
      src={url}
      frameborder="0"
      allow="encrypted-media"
      title={title}
      style={{ height: "100%", width: "100%", left:"0px", top:"0px" }}
    />
        </div>
  );
};


