import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
        <div className="weather">
            <form>
                <div className="row">
                    <div className="col-8">
                <input type="search" placeholder="Enter a city.." />
                </div>
                <div className="col-4">
                <input type="submit"value="Search" className="btn btn-primary" /> 
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
                   6 C 
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