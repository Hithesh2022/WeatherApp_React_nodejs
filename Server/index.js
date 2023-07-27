require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const axios = require('axios');
const bodyParser = require('body-parser');
const apikey=process.env.API_KEY;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    const city=req.query.city;
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
        
        const temperatureInKelvin = response.data.main.temp;
        const temperatureCelsius = (temperatureInKelvin - 273.15).toFixed(2);
        const humidity = response.data.main.humidity;
        const weather=response.data.weather[0].main;
        const description=response.data.weather[0].description;
        const icon=response.data.weather[0].icon;
        
        const send=[ weather,icon,description,temperatureCelsius, humidity]
        console.log(send[0])
        
       
       res.send(send)
       
    }catch(err){
        console.log(err);
    }
  
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});