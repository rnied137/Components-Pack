import React from 'react'
import { ReactComponent as DeliveryImg } from './delivery.svg'


const Bar = ({small, colored})=>{
    return (
        <div style={{
              borderRadius: "15px",
              backgroundColor: colored ? "#40D9B4" : "#fff",
              width: small ? "29px"  : "64px",
              height:"13px"}}/>
    )
}


export const Delivery = () => {
    return (
       
            <div style={{backgroundColor: "#7434a4", borderRadius: "15%",width: "326px", height: "326px", padding: "3rem"}}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", width: "100%", height: "100%"}} >
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "180px"}}>
       <Bar small={true} colored={true}/>
       <Bar small={true} colored={true}/>
       <Bar small={true} colored={true}/>
       <Bar small={false} colored={false}/>
        </div>
          <DeliveryImg />
          <div style={{position: "relative", bottom: "10px"}}>
          <span style={{fontWeight: "550", fontSize: "3rem", color: "#fff", fontFamily: "DM Sans"}}> Out for Delivery</span>
          </div>
        </div>
      </div>
    )
}



----------------------------------------------------------------



import React from 'react'
import { ReactComponent as DeliveryImg } from './delivery.svg'


export const Delivery = () => {
    return (
       
            <div style={{backgroundColor: "#7434a4", borderRadius: "15%",width: "326px", height: "326px", padding: "3rem"}}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", width: "100%", height: "100%"}} >
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "180px"}}>
          <div style={{ borderRadius: "15px", backgroundColor: "#40D9B4", width:"29px", height:"13px"}}></div>
          <div style={{ borderRadius: "15px", backgroundColor: "#40D9B4", width:"29px", height:"13px"}}></div>
          <div style={{ borderRadius: "15px", backgroundColor: "#40D9B4", width:"29px", height:"13px"}}></div>
          <div style={{ borderRadius: "15px", backgroundColor: "#fff", width:"64px", height:"13px"}}></div>
        </div>
          <DeliveryImg />
          <div style={{position: "relative", bottom: "10px"}}>
          <span style={{fontWeight: "550", fontSize: "3rem", color: "#fff", fontFamily: "DM Sans"}}> Out for Delivery</span>
          </div>
        </div>
      </div>
    )
}
