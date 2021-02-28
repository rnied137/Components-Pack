import React from "react";

import "./UserCard.css";

export const UserCard = () => {
  return (
    <div className="user-card-container">
      <div className="user-card-profile">
        <img className="border-radius user-card-image"
          src="https://picsum.photos/128/128"
          alt="user-profie"
        />
      </div>
      <div className="user-card">
        <span className="user-card-name">Johny Wilson</span>
        <p className="user-card-email">johnywillson@gmail.com</p>
        <div className="user-card-row">
          <div>
            <span className="user-card-accent">23</span>
            <span className="user-card-smaller">Routes</span>
          </div>
          <div>
            <span className="user-card-accent">16</span>
            <span className="user-card-smaller">Skills</span>
          </div>
          <div>
            <img width="55%" src="images/approval.svg" />
            <span className="user-card-smaller">5 badges</span>
          </div>
        </div>
        <div className="user-card-parents">
          <span>Parents</span>
          <div>
            <img
              className="border-radius"
              src="https://picsum.photos/48/48?random=2"
              alt="parent-1"
            />
            <img
              className="border-radius"
              src="https://picsum.photos/48/48?random=3"
              alt="parent-2"
            />
          </div>
        </div>
        <a className="user-button-link" href="#">
          <span>Contact</span>
        </a>
      </div>
    </div>
  );
};
