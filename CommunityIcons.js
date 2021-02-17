import React from "react";

import "./CommunityIcons.css";

export const CommunityIcons = (props) => {
  const { plays, likes, shares, messages } = props;
  return (
    <div className="community-icons">
      <div>
        <i className="fa fa-volume-up"></i>
        <span>{plays}</span>
      </div>

      <div>
        <i className="fa fa-heart"></i>
        <span>{likes}</span>
      </div>

      <div>
        <i className="fa fa-link"></i>
        <span>{shares}</span>
      </div>

      <div>
        <i className="fa fa-chevron-right"></i> <span>{messages}</span>
      </div>
    </div>
  );
};
