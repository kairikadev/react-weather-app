import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import { loadPartialConfig } from "@babel/core";

export default function Weather(){
    const [weatherData, setWeatherData]= useState({ready:false});
    

    function handleResponse(response){
        let weatherData={
            ready:true,
            date: "Wednesday 10:00",
            temperature:response.data.main.temp,
            description:response.data.weather[0].description,
            wind:response.data.wind.speed,
            humidity:response.data.main.humidity,
            icon:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            city: response.data.name
        }
        setWeatherData(weatherData);

        
    }

    if(weatherData.ready){
        return(
            <div className="weather">
                <form >
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
               <h1>{weatherData.city}</h1>
               <ul>
                   <li>{weatherData.date}</li>
                   <li className="text-capitalize">{weatherData.description}</li>
               </ul>
               <div className="row">
                   <div className="col-6">
                       <img src={weatherData.icon} alt={weatherData.descpription}  />
                       <span className= "temperature">
                           6
                       </span> 
                       <span className= "unit">°C |</span> 
                       <span className= "unit">°F</span>
                   </div>
                   <div className="col-6">
                       <ul>
                           <li>Humidity:{weatherData.humidity}%</li>
                           <li>Wind: {weatherData.wind} km/h</li>
                       </ul>
                   </div>
               </div>
            </div>
        )
    
        
    
    }
    else {
        const apiKey = "e1011e97bf969d1b569c2b62944075b5";
    let city = "London";
    let apiUrl =`https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

        return "Loading ...";
    }

    
};