import React, { useState } from 'react'
import { ReactComponent as DeliveryImg } from './delivery.svg'
import  './Delivery.css';
import { AnimatedWrapper } from './AnimatedWrapper';


const Bar = ({small, colored})=>{
    return (
      <AnimatedWrapper>
        <div style={{
              borderRadius: "15px",
              backgroundColor: colored ? "#40D9B4" : "#fff",
              width: small ? "29px"  : "64px",
              height:"13px"}}/>
              </AnimatedWrapper>
    )
}


export const Delivery = ({delivery}) => {

    const deliveryState = delivery.deliveryState ?? "Still processing";

    return (
       
            <div style={{backgroundColor: "#7434a4", borderRadius: "15%",width: "326px", height: "326px", padding: "3rem"}}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", width: "100%", height: "100%"}} >
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "180px"}}>
       <Bar small="true" colored="true"/>
       <Bar small="true" colored="true"/>
       <Bar small="true" colored={true}/>
       <Bar small={false} colored={false}/>
        </div>
        <AnimatedWrapper>
           <DeliveryImg />
        </AnimatedWrapper>
        <AnimatedWrapper>
          <div style={{position: "relative", bottom: "10px"}}>
          <span style={{fontWeight: "550", fontSize: "3rem", color: "#fff", fontFamily: "DM Sans"}}> {deliveryState}</span>
          </div>
          </AnimatedWrapper>
        </div>
      </div>
    )
}

---

import React, { useState } from 'react'

import  './Delivery.css';


export const AnimatedWrapper = ({style, className, children}) => {
    const [animate, setAnimate ] = useState(false);

    const handleAnimate = (state) => {
            setAnimate(state);
    }
    return (
        <div className={ animate ?  `animated-image animate animate-grow` : `animated-image`} 
        onMouseEnter={ () => handleAnimate(true)}
        onMouseLeave={ () => handleAnimate(false)}
        >
            {children}
     </div>
    )
}

