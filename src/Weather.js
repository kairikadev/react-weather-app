import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";


export default function Weather(){
    const [city, setCity] = useState("props.defaultCity");
    const [weatherData, setWeatherData]= useState({ready:false});
    

    function handleResponse(response){
        let weatherData={
            ready:true,
            date: new Date(response.data.dt *1000),
            temperature:Math.round(response.data.main.temp),
            description:response.data.weather[0].description,
            wind:response.data.wind.speed,
            humidity:response.data.main.humidity,
            icon:response.data.weather[0].icon ,
            city: response.data.name
        }
        setWeatherData(weatherData);

        
    }

    function search(){
        const apiKey = "e1011e97bf969d1b569c2b62944075b5";
        
        let apiUrl =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);
    
    }
    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleChangeCity(event){
        setCity(event.target.value);
    }

    if(weatherData.ready){
        return(
            <div className="weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                    <input type="search" placeholder="Enter a city.." 
                    className="form-control"
                    onChange = {handleChangeCity}
                     />
                    </div>
                    <div className="col-3">
                    <input type="submit"value="Search" className="btn btn-primary w-100" /> 
                    </div>
                    </div>           
                    </form>
                    <WeatherInfo data={weatherData} />
               </div>
        )
    
    }
    else {
       search()

        return "Loading ...";
    }

    
};