import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response){

    }
    let apiKey="e1011e97bf969d1b569c2b62944075b5";
    let longitude= props.coordinates.lon;
    let latitude= props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                   <div className="WeatherForecast-day">
                       Thu
                       </div> 
                   <WeatherIcon code="01d" size={36}/>
                   <div>
                   <span className="temperature-max">
                       19°
                       </span>
                       <span className="temperature-min">
                       10°
                       </span>
                       </div>


                </div>
            </div>
        </div>
    )
}