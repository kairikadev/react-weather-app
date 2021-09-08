import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";




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
                       <div className="d-flex">
                       <div>
                       <WeatherIcon code={props.data.icon}  size={52} alt={props.data.description} />
                       </div>
                       <div>
                       <WeatherTemperature celsius={props.data.temperature} />
                       </div>
                       </div>
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