import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city.." 
                className="form-control" />
                </div>
                <div className="col-3">
                <input type="submit"value="Search" className="btn btn-primary w-100" /> 
                </div>
                </div>           
                </form>
           <h1>New York</h1>
           <ul>
               <li>Wednesday 10:00</li>
               <li>Mostly cloudy</li>
           </ul>
           <div className="row">
               <div className="col-6">
                   <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly cloudy"  />
                   <span className= "temperature">
                       6
                   </span> 
                   <span className= "unit">°C |</span> 
                   <span className= "unit">°F</span>
               </div>
               <div className="col-6">
                   <ul>
                       <li>Percipitation: 1%</li>
                       <li>Humidity: 40%</li>
                       <li>Wind: 13 km/h</li>
                   </ul>
               </div>
           </div>
        </div>
    )

    
};