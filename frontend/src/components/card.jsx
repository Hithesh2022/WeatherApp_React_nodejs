import React from "react";
import "../App.css"

function Card({ weatherData }) {
   
    const image = weatherData ? `http://openweathermap.org/img/w/${weatherData[1]}.png` : null;

    
    
    return (
      <div className='weather-form'>
        {weatherData && (//weatheredata not null then return 
          <div className="card">
            <h3>Weather Data</h3>
            <p>Weather:{weatherData[0]}</p>
            <img src={image} alt="weather icon"/>
            <p>Description:{weatherData[2]}</p>
            <p>Temperature: {weatherData[3]} c</p>
            <p>Humidity: {weatherData[4]}%</p>
          </div>
        )}
      </div>
    );
  }
  
  
export default Card;