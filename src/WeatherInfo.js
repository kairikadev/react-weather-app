import React from "react";

import FormattedDate from "./FormattedDate";


export default function WeatherInfo (props){
    return(
        <div>
            <h1>{props.data.city}</h1>
               <ul>
                   <li>
                       <FormattedDate date={props.data.date} />
                   </li>
                   <li className="text-capitalize">{props.data.description}</li>
               </ul>
               <div className="row">
                   <div className="col-6">
                       
                       <span className= "temperature">
                           {props.data.temperature}
                       </span> 
                       <span className= "unit">°C |</span> 
                       <span className= "unit">°F</span>
                   </div>
                   <div className="col-6">
                       <ul>
                           <li>Humidity:{props.data.humidity}%</li>
                           <li>Wind: {props.data.wind} km/h</li>
                       </ul>
                   </div>
               </div>
            </div>
        );
    
        
    
     
    
}