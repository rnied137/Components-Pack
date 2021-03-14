import React from "react";

export const Card = ({
  children,
  width = "300px",
  paddingTop = "20px",
  paddinBottom = "20px",
  paddingLeft = "20px",
  paddingRight = "20px",
  backgroundColor = "white",
  opacity = "1"
}) => {
  return (
    <div
      style={{
        boxShadow: " 0 0 3em rgba(0,0,0,.15",
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        paddingTop: paddingTop,
        paddingBottom: paddinBottom,
        borderRadius: "15px",
        width: width,
        marginTop:"0.5rem",
        backgroundColor:backgroundColor,
        opacity:opacity
      }}
    >
      {children}
    </div>
  );
};
