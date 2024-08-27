import {  useRef, useState } from "react";
import MapYourTripContext from "./MapYourTripContext.js";
const MapYourTripProvider = (props) =>{
  

  return (
    <MapYourTripContext.Provider value={{}}>
        {props.children}
    </MapYourTripContext.Provider>
  );
};

export default MapYourTripProvider;