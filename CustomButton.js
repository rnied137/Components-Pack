import React from 'react'

import "./CustomButton.css";

export const CustomButton = ({url, transparent, children}) => {

    if(transparent) return(
      <>
      <a alt="Link to something" href={url || "#"} className="btn btn-transparent">
        <span>
        {children || "Play"} <i className="fa fa-chevron-right"></i>
        </span>
      </a>
</>
    )
    else
    return (
            <>
              <a alt="Link to something" href={url} className="btn btn-black">
                <span>
               {children || "Play" } 
                </span>
              
              </a>
       </>
    )
}
